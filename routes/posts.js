const express = require('express');
const router = express.Router();
const { addPost, getPosts } = require('../db/repository.js');
const { v4 } = require ('uuid');

/* GET posts listing. */
router.get('/', async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

router.post('/', async (req, res) => {
  let post = req.body;
  const ext = req.files.image.name.split('.')[1];
  const imageName = v4() + '.' + ext;
  post = {...post, imageName}
  const postId = await addPost(post);  
  req.files.image.mv(`public/uploads/${imageName}`);
  res.location(`/posts/${postId}`).sendStatus(201);
});

router.get('/hello', async (req, res) => {
  const image = await getImage();
  res.send(image);
});

module.exports = router;
