const express = require('express');
const { getUser, getRating } =  require('../db/repository.js');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ msg: "this is the users endpoint" });
});

router.get('/:id', async (req, res) => {
  const user = await getUser(req.params.id);
  res.json(user[0]);
});

router.get('/owner/:id', async (req, res) => {
  const user = await getUser(req.params.id);
  const firstName = user[0].firstName;
  const rating = await getRating(req.params.id);
  const owner = {
    firstName,
    rating,
  }
  res.json(owner);
});

// setting new users

// getting specific user

module.exports = router;
