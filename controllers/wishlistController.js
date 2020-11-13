const Wishlist = require("../models/wishlist");
const Books = require("../models/books");

exports.getAllWishList = async (req, res, next) => {
  let wishlist;

  try {
    wishlist = await Wishlist.findOne({ user: req.user._id }).populate("book");
    return res.status(200).json(wishlist);
  } catch (err) {
    return res.status(500).json({ msg: "Server Error" });
  }
};

exports.addWishList = async (req, res, next) => {
  let book;
  try {
    book = await Books.findOne({ _id: req.params.book_id });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error" });
  }

  if (!book) {
    return res.status(404).json({ msg: "Couldn't find any book!" });
  }
  let wishlist;
  try {
    wishlist = await Wishlist.findOne({ user: req.user._id });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error!" });
  }

  if (!wishlist) {
    const newWishList = new Wishlist({
      user: req.user._id,
      book: [book]
    });
    const result = await newWishList.save();
    return res.status(200).json({ result });
  } else {
    try {
      if (wishlist.book.includes(book._id)) {
        return res
          .status(400)
          .json({ error: "You've added this book to wishlist" });
      } else {
        wishlist.book.push(book._id);
        const result = await wishlist.save();
        return res.status(200).json(result);
      }
    } catch (err) {
      return res.status(500).json({ msg: "Server Error!" });
    }
  }
};

exports.deleteWishList = async (req, res, next) => {
  let wishlist;
  let book;
  try {
    wishlist = await Wishlist.findOne({ user: req.user._id });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error!" });
  }

  if (!wishlist) {
    return res.status(404).json({ msg: "Could not find wishlist" });
  }

  try {
    book = await Books.findById(req.params.book_id);
  } catch (err) {
    return res.status(500).json({ msg: "Server Error!" });
  }

  if (!book) {
    return res.status(404).json({ msg: "Could not find book" });
  }

  wishlist.book.pull(book._id);
  const result = await wishlist.save();
  return res.status(200).json({ msg: "delete successfully", result });
};
