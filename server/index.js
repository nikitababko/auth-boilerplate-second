const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
});
console.log(`Server has started on port: ${PORT}`);

// Connect ot mongoDB
mongoose.connect(
  process.env.MDB_CONNETC,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw Error(err);
    console.log('Connected to mongoDB');
  }
);
