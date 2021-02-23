const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

// Set up server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
});
console.log(`Server has started on port: ${PORT}`);

app.use(express.json());
app.use(cookieParser());

// Connect ot mongoDB
mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw Error(err);
    console.log('Connected to MongoDB');
  }
);

// Set up routes
const userRouter = require('./routers/userRouter');
const customerRouter = require('./routers/customerRouter');
app.use('/auth', userRouter);
app.use('/customer', customerRouter);
