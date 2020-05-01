const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  success: String
});

module.exports = mongoose.model("File", fileSchema);