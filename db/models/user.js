const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: String,
  password: String,
  rating: Number,
  picture: String,
  location: String
})

module.exports = mongoose.model('users', userSchema);