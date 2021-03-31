require('./db.js');
const User = require('./models/user.js');
const Listing = require('./models/listing.js');
const Review = require('./models/review.js');
const Booking = require('./models/booking.js');

const ObjectId = require('mongodb').ObjectId;

const getListings = async () => {
  return await Listing.find();
}

const addListing = async (listing) => {
  const result = await Listing.create(listing, (err, createdListing) => {
    if (err) {
      console.log(err);
    } else {
      return createdListing._id
    }
  });
}

const validateUser = async (username) => {
  const user = await User.find({ username });
  return user.length !== 0 ? user[0]._id : false;
}

const getUser = async (userId) => {
  return await User.find({_id: ObjectId(userId)});
}

const getReviews = async (userId) => {
  return await Review.find({ownerId: ObjectId(userId)});
}

const getRating = async (userId) => {
  const reviews = await Review.find({ownerId: ObjectId(userId)});
  const ratingTotal = reviews.map(review => review.rating).reduce((a, b) => a + b);
  const ratingAverage = ratingTotal / reviews.length;
  return ratingAverage;
}

const addBooking = async (req, renterId) => {
  const newBooking = {
    ...req, renterId
  };

  await Booking.create(newBooking, (err, createdBooking) => {
    if (err) {
      console.log(err);
    } else {
      return createdBooking._id
    }
  });
}

const getListingOwner = async (listingId) => {
  const listing = await Listing.find({_id: ObjectId(listingId)});
  return listing[0].ownerId;
};

module.exports = {
  addListing,
  getListings,
  validateUser,
  getUser,
  getReviews,
  getRating,
  addBooking,
  getListingOwner,
}