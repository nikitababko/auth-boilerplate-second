const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

// Set up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Server has started on port: ${PORT}`);
});

// Connect ot mongoDB
require('./core/db');

// Set up routes
const createRouters = require('./core/routers');
createRouters(app);
