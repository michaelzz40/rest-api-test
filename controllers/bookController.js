const Books = require("../models/books");
const mongoose = require("mongoose");

// method: GET
// route: api/books/
// description: Get all books from database
const getAllBooks = async (req, res, next) => {
  const books = await Books.find();
  res.status(200).json(books);
};

// method: GET
// route: api/books/:id
// description: Get book by id
const getBookById = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status("404").json({ msg: "Please Provide correct ID" });
  }
  let book = null;

  if (!req.params.id) {
    book = await Books.find();
    return res.status(200).json(book);
  }
  try {
    book = await Books.findById(req.params.id);
  } catch (error) {
    return res.status(500).send("Server Error");
  }

  if (!book) {
    return res.status(404).json({ msg: "Could not find any books" });
  }

  res.status(200).json({ book: Array(book) });
};

// method: POST
// route: api/books/
// description: Add new book
const addBook = async (req, res, next) => {
  const { title, author, isbn, publisher, publication_year } = req.body;

  if (publication_year.length > 4 || publication_year.length < 4) {
    return res
      .status(400)
      .json({ msg: "Please provide correct Publication Year!" });
  }

  const newData = {
    title,
    author,
    isbn,
    publisher,
    publication_year,
    last_modified_date: Date.now()
  };
  try {
    const result = await Books.create(newData);
    res.status(200).json({ msg: "Successfully created new book", result });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// method: PUT
// route: api/books/:id
// description: Update book by Id
const updateBook = async (req, res, next) => {
  const { title, author, isbn, publisher, publication_year } = req.body;
  let book = null;

  try {
    book = await Books.findOneAndUpdate(
      { _id: req.params.id },
      {
        title,
        author,
        isbn,
        publisher,
        publication_year,
        last_modified_date: Date.now()
      },
      { new: true },
      (err, doc) => {
        if (err && err.kind === "ObjectId") {
          return res.status(404).json({ msg: "Please insert the correct ID" });
        }
        return res
          .status(200)
          .json({ msg: "Book Information Updated", result: doc });
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};

const deleteBook = async (req, res, next) => {
  try {
    await Books.findByIdAndDelete(req.params.id, err => {
      if (err && err.kind === "ObjectId") {
        return res.status(400).json({ msg: "Object not found" });
      }
    });
    res.status(200).json({ msg: "Deleted a book" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};
