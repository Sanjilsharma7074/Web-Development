const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

app.use(express.urlencoded({extended:false}));
// ? will convert the form data into objects and then assign those values inside the req.body.

// app.use((req,res,next) =>{
//   console.log("Hello from middleware 1.");
// })
// ! The above middleware neither ended the response nor did it called the next function to run the next function in the stack of the code.
// * It held the request to itself.


// app.use((req,res,next)=>{
//   console.log("Hello from middleware 1");
//   return res.json({msg:"Hello from middleware 1"});
// })
// ? The above middleware will return a json response which will not let the req go to the next stack, instead the process will be terminated then and there.


app.use((req,res,next)=>{
  console.log("Hello from middleware 1");
  req.userName = "sanjil";
  next();
})
// ! whatever changes we make with req and res in any middleware, the changes will persist throughout the code.

app.use((req,res,next)=>{
  console.log("Hello from middleware 2",req.userName);
  next();
})

app.use((req,res,next) => {
  fs.appendFile("./log.txt" , `\n${new Date().toLocaleString()}  ${req.method} : ${req.path}`,(err,data) => {
    next();
  })
})

app.get("/api/users",(req,res)=>{
  return res.json(users);
})

app.listen(8001,(req,res)=>{
  console.log("Server is running on port 8001.");
  
})