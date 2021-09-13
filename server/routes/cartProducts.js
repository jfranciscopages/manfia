const express = require(`express`);
const router = express.Router();

//Import Controller
const cartProducts_controller = require("../controllers/cartProducts.controller");
//Destructuring Controllers
const { getAll } = cartProducts_controller;

//Routes With Controllers
router.get(`/:orderId`, getAll);

router.put(`/:orderId/:id`, getAll);

module.exports = router;
