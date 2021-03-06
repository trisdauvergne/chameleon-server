const express = require('express');
const router = express.Router();
const { getReviews,addReview, updateReviewStatus, getReviewsByBookingId } = require('../db/repository.js');

router.get('/:id', async (req, res) => {
  const reviews = await getReviews(req.params.id);
  res.json(reviews);
})

router.get('/booking/:id', async (req, res) => {
  const reviews = await getReviewsByBookingId(req.params.id);
  res.json(reviews);
})

router.post('/', async (req, res) => {
  const reviewId = await addReview(req.body);
  await updateReviewStatus(req.body);
  res.location(`/reviews/${reviewId}`).sendStatus(201);
})

module.exports = router;