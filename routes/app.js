const mongoose = require("mongoose");
const Detail = require("./models/Detail");
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
module.exports = router;
