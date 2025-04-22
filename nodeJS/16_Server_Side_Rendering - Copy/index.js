const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");

const URL = require("./models/url");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected Successfully."))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.set("view engine","ejs");

app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended : false}))

app.get("/test",async (req,res) => {
  const allUrls = await URL.find({});
 return res.render("home",{
  urls : allUrls,
 });
})

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    console.log(shortId);
    
    console.log("Short ID from request:", `http://localhost:8001/url/${shortId}`);

    if (!shortId) {
      console.log("Error: shortId is undefined");
      return res.status(400).json({ error: "Invalid shortId" });
    }

    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true } // Ensures the updated document is returned
    );

    if (!entry) {
      console.log("No entry found for shortId:", shortId);
      return res.status(404).json({ error: "Short URL not found" });
    }

    console.log("Redirecting to:", `${entry.redirectURL}`);
    return res.redirect(`${entry.redirectURL}`);
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
