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

const validateUser = async (username) => {
  const user = await User.find({ username });
  return user.length !== 0 ? user[0]._id : false;
}


module.exports = {
  addPost,
  getPosts,
  validateUser,
}