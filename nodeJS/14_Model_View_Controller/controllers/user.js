const User = require("../models/user")

async function handleGetAllUsers(req,res) {

  const allDbusers = await User.find({});
  return res.json(allDbusers);

}

async function handleGetUserByID(req,res) {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ Error: "User not found" });
  return res.json(user);
}

async function handleUpdateUserByID(req,res) {
  await User.findByIdAndUpdate(req.params.id, { email: "changed" });

  return res.json({ Status: "Success" });
}

async function handleDeleteUserByID(req,res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ Status: "Success" });
}

async function handleCreateNewUser(req,res){
  const body = req.body;
  // if (
  //   !body ||
  //   !body.first_name ||
  //   !body.last_name ||
  //   !body.gender ||
  //   !body.job_title ||
  //   !body.email
  // ) {
  //   return res.status(400).json({ msg: "All fields are required" });
  // }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("Result : ", result);

  return res.status(201).json({ msg: "success" , id: result._id});
}

module.exports = {
  handleGetAllUsers,
  handleGetUserByID,
  handleUpdateUserByID,
  handleDeleteUserByID,
  handleCreateNewUser
}