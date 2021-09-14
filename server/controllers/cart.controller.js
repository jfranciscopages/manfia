const { Orders, Order_Details, User_Profile } = require(`../models`);

const cart_controller = {
  getAllforOneUserAdmin: async (req, res, next) => {
    try {
      const user = await User_Profile.findByPk(id);
      const { id } = user;
      const order = await Orders.findOne({
        where: { userId: id, orderStatus: "open" },
      });
      const { orderId } = order;
      const order_details = await Order_Details.findAll({
        where: { orderId: orderId },
      });
      return res.status(200).json(order_details);
    } catch (err) {
      next(err);
    }
  },

  createOrder: async (req, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  },
};

module.exports = cart_controller;
