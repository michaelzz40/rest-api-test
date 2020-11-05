const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  publication_year: {
    type: String,
    required: true
  },
  last_modified_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  created_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model("book", bookSchema);
