const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  tweet_text: {
    type: String,
    required: true
  },
  classified_image: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
}, { collection: "tweets_collection" }); // Specify the collection name

const Detail = mongoose.model("Detail", DetailSchema); // Use a singular model name

module.exports = Detail;
