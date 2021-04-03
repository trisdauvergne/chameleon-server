const express = require('express');
const router = express.Router();
const { addListing, getListings, getListing, getActiveListings, updateListing, deleteListing } = require('../db/repository.js');
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
    ownerId: body.ownerId
  };

  if (req.body.currentimage) {
    return { ...listing, pictures: [req.body.currentimage] };
  }
  const ext = req.files.image.name.split('.').reverse()[0];
  const imageName = v4() + '.' + ext;
  return { ...listing, pictures: [imageName] };
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
  const listing = await getListing(req.params.id);
  res.json(listing);
});

router.post('/:id', async (req, res) => {
  const listing = createListing(req);
  const listingId = await updateListing(listing, req.params.id);;
  if (req.files) {
    req.files.image.mv(`public/uploads/${req.body.currentimage}`);
  }
  res.location(`/listings/${listingId}`).sendStatus(204);
  res.end();
});

router.post('/', async (req, res) => {
  const listing = createListing(req);
  const listingId = await addListing(listing);  
  req.files.image.mv(`public/uploads/${listing.pictures[0]}`);
  res.location(`/listings/${listingId}`).sendStatus(201);
});

router.delete('/:id', async (req, res) => {
  await deleteListing(req.params.id);
  res.sendStatus(204);
})

module.exports = router;
