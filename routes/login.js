const express = require('express');
const router = express.Router();
const { validateUser } = require('../db/repository.js');
require('dotenv').config();

const frontend = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://trisdauvergne.github.io';

router.post('/', async (req, res) => {
  const userId = await validateUser(req.body.username);
  console.log(req.body);
  if (userId) {
    res.cookie('userId', `${userId}`, { httpOnly: false, sameSite: 'none' }).setHeader('Access-Control-Allow-Origin', frontend).sendStatus(204);
  } else {
      res.sendStatus(401);
  }
})

module.exports = router;