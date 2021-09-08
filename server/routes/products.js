const express = require(`express`);
const router = express.Router();
const product_controllers = require("../controllers/products.controllers");
const categories_controllers = require("../controllers/categories.controllers");

const { getAll, addOneProduct } = product_controllers;
const { addOneCategorie } = categories_controllers;

router.get(`/`, getAll);

router.get(`/:id`, function (req, res) {
  console.log(`wep!`);
  res.sendStatus(200);
});

router.post(`/addProduct`, addOneProduct);
router.post(`/addCat`, addOneCategorie);

router.put("/edit", (req, res, next) => {
  console.log(`wep!`);
  res.sendStatus(200);
});

router.delete("/delete", (req, res, next) => {
  console.log(`wep!`);
  res.sendStatus(200);
});

module.exports = router;
