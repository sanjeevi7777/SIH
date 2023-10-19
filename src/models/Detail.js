const mongoose = require("mongoose");
const DetailSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  predicted_class: {
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
});
const Detail = mongoose.model("detail", DetailSchema);
module.exports = Detail;
