const express = require('express');
const router = express.Router();
const { addListing, getListings, getListingOwner, getActiveListings } = require('../db/repository.js');
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
    ownerId: req.cookies['userId']
  };

  const ext = req.files.image.name.split('.').reverse()[0];
  const imageName = v4() + '.' + ext;
  return { ...listing, pictures: [imageName] }
}


router.get('/', async (req, res) => {
  const listings = await getListings();
  res.json(listings);
});

router.get('/active/:id', async (req, res) => {
  const activeListings = await getActiveListings(req.params.id);
  res.json(activeListings);
})

router.get('/:id', async (req, res) => {
  const ownerId = await getListingOwner(req.params.id);
  res.json(ownerId);
});

router.post('/', async (req, res) => {
  const listing = createListing(req);
  console.log(listing);
  const listingId = await addListing(listing);  
  req.files.image.mv(`public/uploads/${listing.pictures[0]}`);
  res.location(`/listings/${listingId}`).sendStatus(201);
});

module.exports = router;
