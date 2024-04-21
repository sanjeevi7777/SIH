const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const express = require("express");
const router = express.Router();
// require("dotenv").config();
// Connect to MongoDB database
mongoose.set("strictQuery", false);
// const url = process.env.DATABASE_URL;
mongoose.connect(
  // "mongodb+srv://Mavericks:Mavericks123@cluster0.edxqwrh.mongodb.net/TweetDetails?retryWrites=true&w=majority",
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
  // return res.status(200).json({
  //   title: "Express Testing",
  //   message: "The app is working properly!",
  // });
});
module.exports = router;
