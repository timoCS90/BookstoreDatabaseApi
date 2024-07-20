const app = require(`express`)();
const PORT = 8080;

import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")