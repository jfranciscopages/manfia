const express = require(`express`);
const router = express.Router();

//Import Controller
const cart_controller = require("../controllers/cart.controller");
//Destructuring Controllers
const { addToCart } = cart_controller;

router.post("/addToCart", addToCart);

module.exports = router;
