const express = require(`express`);
const router = express.Router();

//Import Controller
const cartProducts_controllers = require("../controllers/cartProducts.controllers");
//Destructuring Controllers
const { getAll } =
  cartProducts_controllers;

//Routes With Controllers
router.get(`/:orderId`, getAll)

router.put(`/:orderId/:id`, getAll)



module.exports = router;
