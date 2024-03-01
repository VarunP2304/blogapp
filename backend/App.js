// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const blogsRouter = require('./routes/blogs');
app.use('/blogs', blogsRouter);

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
