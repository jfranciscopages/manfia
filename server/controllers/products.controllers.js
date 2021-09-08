const { Products, Categories } = require(`../models`);

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
  addOneProduct: async (req, res, next) => {
    const body = req.body;
    const cat = req.body.category;
    try {
      const product = await Products.create(body);
      const categorie = await Categories.findOne({ where: { name: cat } });
      await product.addCategories(categorie);
      return res.status(200).json(product);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = products_controller;
