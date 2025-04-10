const express = require("express");
const URL = require("../models/url")

const router = express.Router();

const dummyUrls = [{ shortId: "abc123" }, { shortId: "xyz789" }];

router.get("/", async (req, res) => {
  
  const allurls = await URL.find({});
  return res.render("home", { urls: allurls }); 
});

module.exports = router; 