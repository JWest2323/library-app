const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const corsOptions = {
  origin: "http://localhost:4200",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// init express app

const app = express();
const port = process.env.port || 3000;

// bodyParser & cors middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// validation middleware
const validateBook = [
  body("title").isString().notEmpty(),
  body("author").isString().notEmpty(),
  body("yearPublished").isISO8601().toInt(),
  body("genre").isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// in-memory data storage
let books = [
  {
    id: uuidv4(),
    title: "The Alchemist ",
    author: "Paulo Coelho",
    yearPublished: new Date("04-25-1993").getFullYear(),
    genre: "Fantasy Novel",
  },
  {
    id: uuidv4(),
    title: "The Richest Man in Babylon",
    author: "George Samuel Clason",
    yearPublished: new Date("04-04-1926").getFullYear(),
    genre: "Non-fiction/Personal Finance",
  },
  {
    id: uuidv4(),
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    yearPublished: new Date("04-02-1987").getFullYear(),
    genre: "Self-help",
  },
  {
    id: uuidv4(),
    title: "The Four Agreements: A Practical Guide to Personal Freedom",
    author: "Don Miguel Ruiz",
    yearPublished: new Date("11-07-1997").getFullYear(),
    genre: "Personal development, Spirituality, Self-help",
  },
];

// GET /books - Returns all books
app.get("/books", (req, res, next) => {
  try {
    res.json(books);
  } catch (error) {
    next(error);
  }
});

// POST /books - Adds a new book
app.post("/books", validateBook, (req, res, next) => {
  try {
    const { title, author, yearPublished, genre } = req.body;
    const book = { id: uuidv4(), title, author, yearPublished, genre };
    books.push(book);
    res.status(201).send(books);
  } catch (error) {
    next(error);
  }
});

// PUT /books/:id - Updates an existing book
app.put("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).send({ error: "Book was not found" });
  }

  const updatedBook = { id, ...req.body };

  books[bookIndex] = updatedBook;

  res.send(books);
});

// DELETE /books/:id - Deletes an existing book
app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    res.status(404).send({ error: "Book was not found" });
  }

  const deletedBook = books.splice(bookIndex, 1);

  res.send(books);
});

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
