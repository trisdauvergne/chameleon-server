const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  renterId: { type: Schema.Types.ObjectId, required: true },
  ownerId: { type: Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true },
  feedback: String,
  date: { type: Date, required: true }
})

module.exports = mongoose.model('Review', reviewSchema);