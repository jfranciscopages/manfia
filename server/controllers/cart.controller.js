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
    const { order, items, clientProfile } = req.body;
    try {
      const user = await User_Profile.findByPk(clientProfile.id);
      order.userProfileId = user.id;
      const newOrder = await Orders.create(order);
      items.map((item) => (item.orderId = newOrder.id));
      console.log(items);
      const orderDetails = await Order_Details.bulkCreate(items);
      return res.status(200).json([newOrder, orderDetails]);
    } catch (err) {
      next(err);
    }
  },

  getHistoryOrders: async (req, res, next) => {
    const id = req.params.id;
    try {
      const orderHistory = await Orders.findAll({
        where: { userProfileId: id },
        include: {
          model: Order_Details,
        },
      });
      return res.status(200).json(orderHistory);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = cart_controller;
