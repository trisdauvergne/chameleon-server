const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  targetId: { type: Schema.Types.ObjectId, required: true },
  authorId: { type: Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true },
  feedback: String,
  date: { type: String, required: true },
  bookingId: { type: Schema.Types.ObjectId, required: true },
})

module.exports = mongoose.model('Review', reviewSchema);