const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const express = require("express");
const router = express.Router();
// require("dotenv");
require("dotenv").config();
// Connect to MongoDB database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
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
