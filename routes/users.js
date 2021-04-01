const express = require('express');
const { getUser, getRating } =  require('../db/repository.js');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const user = await getUser(req.params.id);
  const rating = await getRating(req.params.id);
  const userAndRating = {user, rating}
  res.json(userAndRating);
});

router.get('/owner/:id', async (req, res) => {
  const user = await getUser(req.params.id);
  const firstName = user.firstName;
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
