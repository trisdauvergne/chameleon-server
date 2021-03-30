const express = require('express');
const { getUser } =  require('../db/repository.js');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ msg: "this is the users endpoint" });
});

router.get('/:id', async (req, res) => {
  const user = await getUser(req.params.id);
  res.json(user[0]);
});

// setting new users

// getting specific user

module.exports = router;
