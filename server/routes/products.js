const express = require(`express`);
const router = express.Router();

//Import Controller
const product_controllers = require("../controllers/products.controller");
//Destructuring Controllers
const { getAll, addOneProduct, getOne, editProduct, deleteProduct } =
  product_controllers;

//Routes With Controllers
router.get(`/`, getAll);

router.get(`/:name`, getOne);

router.post(`/addProduct`, addOneProduct);

router.put("/edit", editProduct);

router.delete("/delete", deleteProduct);

module.exports = router;
