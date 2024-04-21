const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const User = require("./models/User");
const express = require("express");
const router = express.Router();
// require("dotenv").config();
// Connect to MongoDB database
mongoose.set("strictQuery", false);
// const url = process.env.DATABASE_URL;
mongoose.connect(
  "mongodb+srv://Mavericks:Mavericks@cluster0.dfkwhsx.mongodb.net/TweetDetails?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("Connected to DB!")
);
router.get("/", async (req, res) => {
  try {
    const Details = await Detail.find();
    res.json(Details);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/id/:id", async (req, res) => {
  try {
    const detail = await Detail.findById(req.params.id);
    res.json(detail);
  } catch (err) {
    res.json({ message: err });
  }
  // console.log();
  // return req;
});
router.get("/user/:email/:password", async (req, res) => {
  const { email, password } = req.params;

  try {
    // Fetch user with the provided email and password
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If user found, respond with user data
    res.json(user);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
