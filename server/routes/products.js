const express = require(`express`);
const router = express.Router();
const product_controllers = require("../controllers/products.controllers");

const { getAll } = product_controllers;

const { Products } = require(`../models`);

router.get(`/`, getAll);

router.get(`/:id`, function (req, res) {
  console.log(`wep!`);
  res.sendStatus(200);
});

router.post(`/add`, function (req, res, next) {
  console.log(`wep!`);
  res.sendStatus(200);
});

router.put("/edit", (req, res, next) => {
  console.log(`wep!`);
  res.sendStatus(200);
});

router.delete("/delete", (req, res, next) => {
  console.log(`wep!`);
  res.sendStatus(200);
});

module.exports = router;
