const express = require(`express`);
const router = express.Router();

//Import Controller
const cart_controller = require("../controllers/cart.controller");
//Destructuring Controllers
const { createOrder } = cart_controller;

router.post("/createOrder", createOrder);

module.exports = router;
