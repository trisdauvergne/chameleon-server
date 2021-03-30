const express = require('express');
const router = express.Router();
const { addListing, getListings } = require('../db/repository.js');
const { v4 } = require ('uuid');

const createListing = (req) => {
  const body =  req.body;
  let listing = {
    title: body.title,
    description: body.description,
    attributes: {
      color: body.color,
      category: body.category,
      size: body.size,
      gender: body.gender,
      price: body.price
    },
    owner: req.cookies['userId']
  };

  const ext = req.files.image.name.split('.').reverse()[0];
  const imageName = v4() + '.' + ext;
  return { ...listing, pictures: [imageName] }
}

/* GET Listings listing. */
router.get('/', async (req, res) => {
  const listings = await getListings();
  res.json(listings);
});

router.post('/', async (req, res) => {
  const listing = createListing(req);
  const listingId = await addListing(listing);  
  req.files.image.mv(`public/uploads/${listing.pictures[0]}`);
  res.location(`/listings/${listingId}`).sendStatus(201);
});

router.get('/hello', async (req, res) => {
  const image = await getImage();
  res.send(image);
});

module.exports = router;
