const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  image: String,
  description: String,
  size: String,
  manufacturer: String,
  hit: Boolean,
  kind: String,
});

module.exports = mongoose.model("Item", itemSchema);
