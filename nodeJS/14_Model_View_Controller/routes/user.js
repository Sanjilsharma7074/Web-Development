const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const allDbusers = await User.find({});

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
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
    console.log("Result : ", result);

    return res.status(201).json({ msg: "success" });
  });

  


router
  .route("/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ Error: "User not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { email: "changed" });

    return res.json({ Status: "Success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ Status: "Success" });
  });

module.exports = router;

