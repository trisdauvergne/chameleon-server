const express = require('express');
const router = express.Router();
const { validateUser } = require('../db/repository.js');

router.post('/', async (req, res) => {
  const userId = await validateUser(req.body.username);
  if (userId) {
    res.cookie('userId', userId, { maxAge: 900000, httpOnly: true }).sendStatus(204);
  } else {
      res.json('Please enter valid username and password!');
  }
})

module.exports = router;