const express = require('express');
const router = express.Router();
const { addBooking } = require('../db/repository.js');

router.post('/', async (req, res) => {
  const bookingId = await addBooking(req.body, req.cookies['userId']);
  res.location(bookingId).sendStatus(201);
})

module.exports = router;