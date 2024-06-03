const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["news", "event"],
      default: "news",
    },
    author: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Article = model('Article', articleSchema);
module.exports = Article;