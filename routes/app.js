const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const User = require("./models/User");

// Connect to MongoDB database
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://Mavericks:Mavericks123@cluster0.edxqwrh.mongodb.net/TweetDetails?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

router.get("/", async (req, res) => {
  try {
    // console.log("rre")
    const details = await Detail.find();
    console.log("Retrieved details:", details); // Log retrieved details
    res.json(details);
  } catch (err) {
    console.error("Error retrieving details:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const detail = await Detail.findById(req.params.id);
    if (!detail) {
      return res.status(404).json({ message: "Detail not found" });
    }
    res.json(detail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/user/:email/:password", async (req, res) => {
  const { email, password } = req.params;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
