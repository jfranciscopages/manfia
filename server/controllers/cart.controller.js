const { Products, Categories, Order_Details, Users } = require(`../models`);

const cart_controller = {
  getAllforUser: async (req, res, next) => {
    try {
      const user = await Users.findByPk(id);
      const products = await Order_Details.findAll({ where: {} });
      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = cart_controller;
