const mongoose = require('mongoose');

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
