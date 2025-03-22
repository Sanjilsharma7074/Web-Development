const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");


const app = express();
const port = 8000;


//Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/my-app-1')
  .then(() => console.log("mongoDB Connected"))
  .catch(err => console.log("Mongo Error", err));

//Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
}, {timestamps : true});

const User = mongoose.model("user", userSchema);


app.use(express.urlencoded({ extended: false }));

app
  .route("/api/users/:id")
  .get(async (req, res) => {

    const user = await User.findById(req.params.id);

    // const id = Number(req.params.id);
    // const user = users.find((user) => user[0].id === id);

    if (!user) return res.status(404).json({ Error: "User not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {

    await User.findByIdAndUpdate(req.params.id , {email : "changed"});

    return res.json({Status : "Success"});

    // const id = Number(req.params.id);
    // const userIndex = users.findIndex((user) => user.id === id);
    // users[userIndex] = { ...users[userIndex], ...req.body };
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    //   return res.json({ status: "success", updatedUser: users[userIndex] });
    // });
  })
  .delete(async (req, res) => {

    await User.findByIdAndDelete(req.params.id );
    res.json({Status : "Success"});

    // const id = Number(req.params.id);
    // const userIndex = users.findIndex((user) => user.id === id);

    // if (userIndex === -1)
    //   return res.status(404).json({ message: "User not found" });

    // // Remove user from the array
    // users.splice(userIndex, 1);

    // // Save updated data to MOCK_DATA.json
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    //   if (err) return res.status(500).json({ message: "Error deleting user" });
    //   return res.json({
    //     status: "success",
    //     message: "User deleted successfully",
    //   });
    // });
  });



app
  .route("/api/users")
  .get(async (req, res) => {

    const allDbusers = await User.find({});

    // console.log(req.headers);
    // res.setHeader("X-MyName", "Sanjil Sharma"); //Custom Header
    return res.json(allDbusers);
  })
  .post(async (req, res) => {
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.gender ||
      !body.job_title ||
      !body.email
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    /* users.push({ id: users.length + 1, ...body });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.status(201).json({ status: "success", id: users.length });
    }); */

    const result = await User.create({
      firstName : body.first_name,
      lastName : body.last_name,
      email : body.email,
      gender : body.gender,
      jobTitle : body.job_title,
    });
    console.log("Result : ",result);
    
    return res.status(201).json({msg : "success"});
  });

//! JSON.stringify() is a method in JavaScript that converts a JavaScript object or array into a JSON-formatted string.


// ? We now want to bring the users details from the database itself instead of fetching it from files.
app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.listen(port, () => {
  console.log("Server is running at port 8000.");
});