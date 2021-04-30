const express = require('express');
const app = express();
const PORT = 8080;
const cats = require('./cats.js');
const dogs = require('./dog.js');

app.use('/cats', cats);
app.use('/dogs', dogs);



app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});