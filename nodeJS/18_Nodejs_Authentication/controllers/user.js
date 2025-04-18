const User = require("../models/user");

async function handleUserSignup(req,res) {
 const {name,mail,password} = req.body;
 await User.create({
  name,
  email,
  password
 });
 return res.render("home");
}

module.exports = {
  handleUserSignup
}