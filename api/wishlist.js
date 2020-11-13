const express = require("express");
const wishListRouter = express.Router();
const {
  getAllWishList,
  addWishList,
  deleteWishList
} = require("../controllers/wishlistController");
const { protect } = require("../middleware/authMiddleware");

wishListRouter.get("/", protect, getAllWishList);
wishListRouter.post("/:book_id", protect, addWishList);
wishListRouter.delete("/:book_id", protect, deleteWishList);

module.exports = wishListRouter;
