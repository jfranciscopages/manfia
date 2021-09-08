const { Products, Categories } = require(`../models`);

const categories_controller = {
  addOneCategorie: async (req, res, next) => {
    const body = req.body;
    try {
      const categorie = await Categories.create(body);
      return res.status(200).json(categorie);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = categories_controller;
