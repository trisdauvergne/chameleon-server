const Review = require('../models/review.js');
const ObjectId = require('mongodb').ObjectId;

const reviewOne = new Review({
  renter: ObjectId('60630e4a4788aa76cd4e3b53'),
  owner: ObjectId('60630e4a4788aa76cd4e3b51'),
  rating: 4,
  feedback: 'I\'m so happy with the rental I was so sad to give it back',
  date: Date.now(),
});

const reviewTwo = new Review({
  renter: ObjectId('60630e4a4788aa76cd4e3b52'),
  owner: ObjectId('60630e4a4788aa76cd4e3b50'),
  rating: 5,
  feedback: 'This was brilliant. Saved my life',
  date: Date.now(),
});

const reviewThree = new Review({
  renter: ObjectId('60630e4a4788aa76cd4e3b4f'),
  owner: ObjectId('60630b198d5e0b7604777a20'),
  rating: 1,
  feedback: 'The dress stank when I put it on. Avoid this person.',
  date: Date.now(),
});

const reviewFour = new Review({
  renter: ObjectId('60630e4a4788aa76cd4e3b53'),
  owner: ObjectId('60630e4a4788aa76cd4e3b52'),
  rating: 5,
  feedback: 'Could not be happier. I was the most beautiful bride at my wedding in this hired garment',
  date: Date.now(),
});

const reviewFive = new Review({
  renter: ObjectId('60630e4a4788aa76cd4e3b52'),
  owner: ObjectId('60630e4a4788aa76cd4e3b51'),
  rating: 3,
  date: Date.now(),
});

reviewOne.save((err) => {
  if (err) {
    console.log(err);
  }
});

reviewTwo.save((err) => {
  if (err) {
    console.log(err);
  }
});

reviewThree.save((err) => {
  if (err) {
    console.log(err);
  }
});

reviewFour.save((err) => {
  if (err) {
    console.log(err);
  }
});

reviewFive.save((err) => {
  if (err) {
    console.log(err);
  }
});