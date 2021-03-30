const User = require('./models/user.js');

const newUserOne = new User({
  firstName: 'David',
  lastName: 'Carlsberg',
  username: 'davve_mannen',
  email: 'david_carlsberg@hotmail.com',
  password: 'davecave',
  location: {
    street: 'Alphyddevägen 8',
    postalcode: 13135,
    area: 'Nacka'
  }
});

const newUserTwo = new User({
    firstName: 'Louise',
    lastName: 'Smith',
    username: 'football_crazy_girl',
    email: 'ls@hotmail.com',
    password: 'davidbeckhamGod',
    location: {
      street: 'Tre Kronors väg 29',
      postalcode: 13131,
      area: 'Nacka'
    }
  });

  const newUserThree = new User({
    firstName: 'Henrik',
    lastName: 'Eriksson',
    username: 'normalGuy',
    email: 'volvoking@gmail.com',
    password: 'volvo740',
    location: {
      street: 'Birger Jarlsgatan 74',
      postalcode: 11420,
      area: 'Stockholm'
    }
  });

  const newUserFour = new User({
    firstName: 'Kenneth',
    lastName: 'Hedman',
    username: 'daddycool',
    email: 'kenneth@gmail.com',
    password: 'ilovejosephine',
    location: {
      street: 'Krokanvägen 37',
      postalcode: 12869,
      area: 'Sköndal'
    }
  });

  const newUserFive = new User({
    firstName: 'Kylie',
    lastName: 'Jenner',
    username: 'longlegs',
    email: 'kyliej@jenner.inc',
    password: 'ilovemyself',
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
