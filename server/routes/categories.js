const express = require(`express`);
const router = express.Router();
//Import Controller
const categories_controller = require("../controllers/categories.controller");
//Destructuring Controllers
const { addOneCategory, findBySex, findBySexAndCategory } =
  categories_controller;

router.post(`/addCategory`, addOneCategory);

router.get(`/:sex`, findBySex);

router.get("/:sex/:category", findBySexAndCategory);

module.exports = router;
