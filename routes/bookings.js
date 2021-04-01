const express = require('express');
const router = express.Router();
const { addBooking, getBookingsForListing } = require('../db/repository.js');

router.post('/', async (req, res) => {
  const bookingId = await addBooking(req.body, req.cookies['userId']);
  res.location(bookingId).sendStatus(201);
})

router.get('/:id', async (req, res) => {
  const bookings = await getBookingsForListing(req.params.id);
  res.json(bookings);
})

module.exports = router;