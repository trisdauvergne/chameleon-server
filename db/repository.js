const { connect } = require('./db.js');
const ObjectId = require('mongodb').ObjectId;
let db;
let postsCol;
let usersCol;

(async function() {
  console.log('initializing db');
  db = await connect();
  postsCol = db.collection('posts');
  usersCol = db.collection('users');
})();

const getPosts = async () => {
  return await postsCol.find().toArray();
}

const addPost = async (post) => {
  const result = await postsCol.insertOne(post);
  return result.insertedId;
}

module.exports = {
  addPost,
  getPosts,
}