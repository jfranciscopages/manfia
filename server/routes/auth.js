const express = require(`express`);
const router = express.Router();

const { Users } = require(`../models`);

router.post(`/register`, function (req, res, next) {
  console.log(`wep!`);
});

router.post(`/login`, function (req, res) {
  console.log(`wep!`);
});

router.post(`/logout`, function (req, res, next) {
  console.log(`wep!`);
});

router.get("/me", (req, res, next) => {
  console.log(`wep!`);
});

module.exports = router;
