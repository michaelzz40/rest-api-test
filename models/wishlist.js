const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  book: [
    {
      type: Schema.Types.ObjectId,
      ref: "book"
    }
  ]
});

module.exports = mongoose.model("wishlist", wishlistSchema);
