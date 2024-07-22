const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:4200",
  methods: "GET, POST, POST, DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// init express app

const app = express();
const port = process.env.port || 3000;

// bodyParser & cors middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// in-memory data storage
let books = [
  {
    bookid: uuidv4(),
    title: "The Alchemist ",
    author: "Paulo Coelho",
    yearPublished: new Date("04-25-1993").getFullYear(),
    genre: "Fantasy Novel",
  },
  {
    bookid: uuidv4(),
    title: "The Richest Man in Babylon",
    author: "George Samuel Clason",
    yearPublished: new Date("04-04-1926").getFullYear(),
    genre: "Non-fiction/Personal Finance",
  },
  {
    bookid: uuidv4(),
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    yearPublished: new Date("04-02-1987").getFullYear(),
    genre: "Self-help",
  },
  {
    bookid: uuidv4(),
    title: "The Four Agreements: A Practical Guide to Personal Freedom",
    author: "Don Miguel Ruiz",
    yearPublished: new Date("11-07-1997").getFullYear(),
    genre: "Personal development, Spirituality, Self-help",
  },
];

// GET /books - Returns all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST /books - Adds a new book
app.post("/books", (req, res) => {
  const book = { id: uuidv4(), ...req.body };
  books.push(book);
  res.status(201).send(books);
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

  res.send(updatedBook);
});

// DELETE /books/:id - Deletes an existing book
app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookIndex = books.findIndex((book) => book.bookid === id);

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
