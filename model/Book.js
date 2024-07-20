import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const blogSchema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }
  };
  

const Book = model('Book', blogSchema);
export default Book;