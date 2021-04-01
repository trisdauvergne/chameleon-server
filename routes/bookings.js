const express = require('express');
const router = express.Router();
const { addBooking, getBookingsForListing, updateBooking, deleteBooking } = require('../db/repository.js');

router.post('/', async (req, res) => {
  const bookingId = await addBooking(req.body, req.cookies['userId']);
  res.location(bookingId).sendStatus(201);
})

router.get('/:id', async (req, res) => {
  const bookings = await getBookingsForListing(req.params.id);
  res.json(bookings);
})

router.put('/:id', async (req, res) => {
  await updateBooking(req.params.id, req.body);
  res.sendStatus(204);
});

router.delete('/:id', async (req, res) => {
  await deleteBooking(req.params.id);
  res.sendStatus(204);
});

module.exports = router;