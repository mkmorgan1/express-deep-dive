const dog = require('express').Router();

dog.get('/normal', (req, res) => {
  res.send('<h1>Dog</h1>');
})

dog.get('/silly', (req, res) => {
  res.send('<h1>Silly Dog</h1>');
})

module.exports = dog;