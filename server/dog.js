const dog = require('express').Router();

dog.get('/', (req, res) => {
  res.send('dog');
})

dog.get('/silly', (req, res) => {
  res.send('silly dog');
})

module.exports = dog;