require('./db.js');
// require('./newUsers.js');
const User = require('./models/user.js');
const Listing = require('./models/listing.js')

const ObjectId = require('mongodb').ObjectId;
// let db;
// let postsCol;
// let usersCol;

// (async function() {
//   console.log('initializing db');
//   db = await connect();
//   postsCol = db.collection('posts');
//   usersCol = db.collection('users');
// })();

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


module.exports = {
  addListing,
  getListings,
  validateUser,
  getUser
}