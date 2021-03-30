const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: {type: String, unique: true},
  password: String,
  picture: String,
  location: {
    street: String,
    postalcode: Number,
    area: String
  }
})

module.exports = mongoose.model('User', userSchema);