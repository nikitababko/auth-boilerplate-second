const express = require('express');

const app = express();

app.get('/auth', (req, res) => {
  res.send({
    name: 'Nikita',
  });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
});
console.log(`Server has started on port: ${PORT}`);
