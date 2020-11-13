const express = require("express");
const bookRouter = express.Router();
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook
} = require("../controllers/bookController");

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);

bookRouter.post("/", addBook);
bookRouter.put("/:id", updateBook);

module.exports = bookRouter;
