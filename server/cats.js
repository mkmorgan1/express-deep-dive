const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('cat');
});

router.get('/sassy', (req, res) => {
  res.send('sassy cat');
});



module.exports = router;
