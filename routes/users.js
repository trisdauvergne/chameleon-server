const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ msg: "this is the users endpoint" });
});

// setting new users

// getting specific user

module.exports = router;
