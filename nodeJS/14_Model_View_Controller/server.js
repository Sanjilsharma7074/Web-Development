const express = require("express");
const {logReqRes} = require("./middlewares")

const {connectMongoDb} = require("./connection")
const userRouter = require("./routes/user")

const app = express();
const port = 8000;


//Connection
connectMongoDb("mongodb://127.0.0.1:27017/my-app-1");

//Middleware - PLUGIN
app.use(express.urlencoded({ extended: false }));


app.use(logReqRes("log.txt"));


//Routes 

app.use("/user",userRouter);


app.listen((req,res) => {
  console.log(`Server is running on PORT : ${port}`);
  
})