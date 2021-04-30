const express = require('express');
const cats = express.Router();

cats.get('/normal', (req, res) => {
  res.send('<h1>Cat</h1>');
});

cats.get('/sassy', (req, res) => {
  res.send('<h1>Sassy Cat</h1>');
});



module.exports = cats;
