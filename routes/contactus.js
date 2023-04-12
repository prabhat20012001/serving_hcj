const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
});

router.post('/contactus', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(req.body)
  // save the user data to a database or file if needed
  res.redirect('/success-message');
});

module.exports = router;