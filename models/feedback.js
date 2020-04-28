const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  image: String,
  name: String,
  comment: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);