const { Orders, Order_Details, User_Profile } = require(`../models`);

const cart_controller = {
  getAllforUser: async (req, res, next) => {
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

  addOrderToUser: {},

  addToCart: async (req, res, next) => {
    //recibe un json con image,title,price,cuantity,y productId y orderId con eso crea la order
    //si el usuario no esta logeado puede crearla igual sin el orderId
    const order = req.body;
    try {
      const oDetails = await Order_Details.create(req.body);
      return res.status(200).json(oDetails);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = cart_controller;
