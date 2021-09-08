const { Products } = require(`../models`);

const products_controller = {
  getAll: async (req, res, next) => {
    try {
      const products = await Products.findAll();
      return res.status(200).json(products);
    } catch (err) {
      console.log(err);
    }
  },

  getOne: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Products.findByPk(id);
      return res.status(200).json(product);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = products_controller;
