const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ msg: "this is the users endpoint" });
});

module.exports = router;
