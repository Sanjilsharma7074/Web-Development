const express = require("express");
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log("Request made at:", Date.now());
  next(); // Pass control to the next middleware
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Router Level Middleware
app.get(
  "/about",
  (req, res, next) => {
    console.log("This is the about page request");
    next(); // Continue to the next middleware or route handler
  },
  (req, res) => {
    res.send("About us");
  }
);

const morgan = require("morgan");
app.use(morgan("tiny")); // Logs HTTP requests in a tiny format

app.use(express.json());

app.post("/data", (req, res) => {
  console.log(req.body); // req.body will contain the parsed JSON object
  res.send("Data received");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
