const express = require(`express`);
const router = express.Router();

const user_controller = require("../controllers/user.controller");

const { edit } = user_controller;

router.put(`/edit`, edit);

module.exports = router;
