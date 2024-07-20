// Mongoose models
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  website: String,
});

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
});

const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);

// Express setup
const express = require("express");
const app = express();
app.use(express.json());

// CRUD operations for authors and books...

app.listen(3000, () => console.log("Server running on port 3000"));
