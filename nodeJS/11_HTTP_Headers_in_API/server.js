const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const port = 8000;

//Middleware - assume it as a plugin
// A plugin is like an extra tool or an add-on that you attach to something to give it more features or power.
// Real-Life Example:
// You have a basic mobile phone , but you want better photos.
// You add a special camera lens attachment.
// → That lens is like a plugin. It improves your phone's camera but your phone still works without it.

//this plugin will help the form data append into the body.

//action of plugin => took the form data->created its js object->appended into req.body

app.use(express.urlencoded({ extended: false }));

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    users[userIndex] = { ...users[userIndex], ...req.body };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      return res.json({ status: "success", updatedUser: users[userIndex] });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1)
      return res.status(404).json({ message: "User not found" });

    // Remove user from the array
    users.splice(userIndex, 1);

    // Save updated data to MOCK_DATA.json
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Error deleting user" });
      return res.json({
        status: "success",
        message: "User deleted successfully",
      });
    });
  });

app
  .route("/api/users")
  .get((req, res) => {
    console.log(req.headers);
    res.setHeader("X-MyName","Sanjil Sharma"); //Custom Header 
    return res.json(users);
  })
  .post((req, res) => {
    const body = req.body;
    users.push({ id: users.length + 1, ...body });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", id: users.length });
    });
  });

//! JSON.stringify() is a method in JavaScript that converts a JavaScript object or array into a JSON-formatted string.

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.listen(port, () => {
  console.log("Server is running at port 8000.");
});
