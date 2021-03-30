const express = require('express');
const router = express.Router();
const { getReviews } = require('../db/repository.js');

router.get('/:id', async (req, res) => {
  const reviews = await getReviews(req.params.id);
  console.log(reviews);
  res.json(reviews);
})

module.exports = router;