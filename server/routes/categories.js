const express = require(`express`);
const router = express.Router();
//Import Controller
const categories_controllers = require("../controllers/categories.controllers");
//Destructuring Controllers
const { addOneCategorie } = categories_controllers;

router.post(`/addCategory`, addOneCategorie);

module.exports = router;
