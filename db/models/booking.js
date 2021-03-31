const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    listingId: {type: Schema.Types.ObjectId, required: true},
    ownerId: {type: Schema.Types.ObjectId, required: true},
    renterId: {type: Schema.Types.ObjectId, required: true},
    bookingFrom: {type: Date, required: true},
    bookingTo: {type: Date, required: true},
    accepted: {type: Boolean, default: false}
})

module.exports = mongoose.model('Booking', bookingSchema);