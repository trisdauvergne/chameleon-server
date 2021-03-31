const express = require('express');
const router = express.Router();
const { validateUser } = require('../db/repository.js');

router.post('/', async (req, res) => {
  const userId = await validateUser(req.body.username);
  console.log(req.body);
  if (userId) {
    res.cookie('userId', `${userId}`, { maxAge: 900000, httpOnly: true }).sendStatus(204);
  } else {
      res.sendStatus(401);
  }
})

module.exports = router;