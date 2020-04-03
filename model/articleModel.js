
const mongoose = require("mongoose");

const Article = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createDateTime: {
    type: String
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
});

module.exports.Schema = Article;
module.exports.Model = mongoose.model("article", Article);
