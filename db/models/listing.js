const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    available: {type: Boolean, required: true, default: true},
    renter: Schema.Types.ObjectId,
    description: String,
    attributes: {
       color: String,
       category: String,
       size: String,
       gender: String,
       price: {type: Number, required: true},
      },
    pictures: [],
    bookings: [
        {
            start: Date,
            end: Date
        },
    ]
})

module.exports = mongoose.model('Listing', listingSchema);