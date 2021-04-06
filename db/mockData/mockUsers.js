const User = require('../models/user.js');

const newUserOne = new User({
  firstName: 'Erik',
  lastName: 'Andersson',
  username: 'erik94',
  email: 'erik.andersson@gmail.com',
  password: 'password123',
  picture: '/profile/erik.jpg',
  location: {
    street: 'Alphyddevägen 8',
    postalcode: 13135,
    area: 'Nacka'
  }
});

const newUserTwo = new User({
    firstName: 'Louise',
    lastName: 'Smith',
    username: 'louise.smith',
    email: 'louise1990@hotmail.com',
    password: 'password123',
    picture: '/profile/louise.jpg',
    location: {
      street: 'Tre Kronors väg 20',
      postalcode: 13131,
      area: 'Nacka'
    }
  });

  const newUserThree = new User({
    firstName: 'Henrik',
    lastName: 'Eriksson',
    username: 'henkeeriksson',
    email: 'henrik.e84@gmail.com',
    password: 'password123',
    picture: '/profile/henrik.jpg',
    location: {
      street: 'Birger Jarlsgatan 74',
      postalcode: 11420,
      area: 'Stockholm'
    }
  });

  const newUserFour = new User({
    firstName: 'Anna',
    lastName: 'Pettersson',
    username: 'annaP',
    email: 'petterson.anna@gmail.com',
    password: 'password123',
    picture: '/profile/anna.jpg',
    location: {
      street: 'Krokanvägen 10',
      postalcode: 12869,
      area: 'Sköndal'
    }
  });

  const newUserFive = new User({
    firstName: 'Sofia',
    lastName: 'Hansson',
    username: 'sooofia89',
    email: 'sofia.hansson@gmail.com',
    password: 'password123',
    picture: '/profile/sofia.jpg',
    location: {
      street: 'Strandvägen 3',
      postalcode: 11451,
      area: 'Stockholm'
    }
  });

newUserOne.save((err) => {
  if (err) {
    console.log(err);
  }
});

newUserTwo.save((err) => {
    if (err) {
      console.log(err);
    }
  });

  newUserThree.save((err) => {
    if (err) {
      console.log(err);
    }
  });

  newUserFour.save((err) => {
    if (err) {
      console.log(err);
    }
  });

  newUserFive.save((err) => {
    if (err) {
      console.log(err);
    }
  });
