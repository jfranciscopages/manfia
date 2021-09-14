const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const usersRouter = require("./users");
const productsRouter = require("./products");
const cartRouter = require("./cart");
const catRouter = require("./categories");
const searchRouter = require("./search");

//RUTAS
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/cart", cartRouter);
router.use("/categories", catRouter);
router.use("/search", searchRouter);

module.exports = router;
