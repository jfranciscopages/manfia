const express = require(`express`);
const router = express.Router();

const { Users } = require(`../models`);

router.post(`/`, function (req, res, next) {
  console.log(`holitas!`);
});

module.exports = router;
