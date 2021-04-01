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
  const user = await User.find({_id: ObjectId(userId)});
  return user[0];
}

const getReviews = async (userId) => {
  return await Review.find({ownerId: ObjectId(userId)});
}

const getRating = async (userId) => {
  const reviews = await Review.find({ownerId: ObjectId(userId)});
  if (reviews.length === 0) {
    return '-';
  }
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

const deleteBooking = async (bookingId) => {
  await Booking.findByIdAndDelete(bookingId, (err, result) => {
    if (err) {
      return err;
    } else {
      return result;
    }
  })
};

const getListing = async (listingId) => {
  const listing = await Listing.find({_id: ObjectId(listingId)});
  return listing[0];
};

const getActiveListings = async (ownerId) => {
  return await Listing.find({ownerId: ObjectId(ownerId)});
}

const updateListing = async (listing, listingId) => {
  await Listing.findByIdAndUpdate({_id: listingId}, listing, (err, result) => {
    if (err){
      return err;
    } else {
      return result._id;
    }
  })
}

const deleteListing = async (listingId) => {
  await Listing.findByIdAndDelete(listingId, (err, result) => {
    if (err) {
      return err;
    } else {
      return result;
    }
  })
}

const getBookingsForListing = async (listingId) => {
  return await Booking.find({ listingId });
}

const updateBooking = async (bookingId, updatedBooking) => {
  await Booking.findByIdAndUpdate({_id: bookingId}, updatedBooking, (err, result) => {
    if (err){
      return err;
    } else {
      return result._id;
    }
  });
} 

module.exports = {
  addListing,
  getListings,
  validateUser,
  getUser,
  getReviews,
  getRating,
  addBooking,
  getListing,
  getActiveListings,
  updateListing,
  deleteListing,
  getBookingsForListing,
  updateBooking,
  deleteBooking
}