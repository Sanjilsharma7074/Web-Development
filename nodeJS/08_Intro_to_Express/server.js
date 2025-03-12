const express = require("express");
const { log } = require("node:console");

const app = express();

app.get("/",(req,res)=>{
    return res.send("Homepage");
})

app.get("/about",(req,res)=>{
    return res.send(`Hello from About page to : ${req.query.name} who has the user ID : ${req.query.user}`);
})

app.listen(3000,(req,res)=>{
    console.log("Port is running on 3000");
})