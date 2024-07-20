import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(express.json());

app.listen(PORT, (err) => {
  if (err) console.error(`Failed to start server: ${err}`);
});
