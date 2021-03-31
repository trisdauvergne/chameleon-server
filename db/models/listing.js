const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    ownerId: {type: Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    description: String,
    attributes: {
       color: String,
       category: String,
       size: String,
       gender: String,
       price: {type: Number, required: true},
      },
    pictures: []
})

module.exports = mongoose.model('Listing', listingSchema);