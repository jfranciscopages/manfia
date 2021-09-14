const { Products, Categories } = require(`../models`);
const { Op } = require("sequelize");

const categories_controller = {
  addOneCategory: async (req, res, next) => {
    const body = req.body;
    try {
      const categorie = await Categories.create(body);
      return res.status(200).json(categorie);
    } catch (err) {
      console.log(err);
    }
  },
  getAllCats: async (req, res, next) => {
    try {
      const categories = await Categories.findAll();
      console.log(categories);
      return res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  },
  findBySex: async (req, res, next) => {
    const sex = req.params.sex;
    try {
      const products = await Products.findAll({
        include: [
          {
            model: Categories,
            where: { sex: { [Op.iLike]: `${sex}%` } },
          },
        ],
      });
      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
  findBySexAndCategory: async (req, res, next) => {
    const { sex, category } = req.params;
    try {
      const products = await Products.findAll({
        include: [
          {
            model: Categories,
            where: {
              name: { [Op.iLike]: `${category}%` },
              sex: { [Op.iLike]: `${sex}%` },
            },
          },
        ],
      });
      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = categories_controller;
