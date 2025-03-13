const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

app.use(express.urlencoded({extended:false}));



app.route("/api/users/:id").get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);

}).patch((req,res)=>{

    //TODO : Edit the user with id

    return res.json({Status:"Pending"});
}).delete((req,res)=>{

    //TODO : Delete the user with id

    return res.json({Status : "Pending"});
})



app.route("/api/users").get((req,res)=>{
    return res.send(users);
}).post((req,res)=>{
    return res.json({status:"Pending"});
})



app.get("/users",(req,res)=>{
    const html = `
    <ul>
        ${users.map( (user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})



app.listen(3000,(req,res)=>{
    console.log("Server is starting at port 3000");

})