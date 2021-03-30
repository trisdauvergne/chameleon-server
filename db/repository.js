const { connect } = require('./db.js');
const users = require('./models/user.js');
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

const getPosts = async () => {
  return await Listing.find();
}

const addPost = async (post) => {
  const result =  await Listing.create(post, (err, createdPost) => {
    if (err) {
      console.log(err);
    } else {
      return createdPost._id
    }
  });
}

module.exports = {
  addPost,
  getPosts,
}