const cartProducts_controller = {

  getAll: async (req, res,next ) => {
  // devuelve todos los productos de un carrito
    console.log("GET CART ROUTE")
    const orderId = req.params.orderId
    // tu codigo aqui
   
    return res.status(200).json([])
  },

  // cuando usuario cambie cantidades, o elimine objetos del carrito o aregue objetos al carrito
  updateOne: async (req, res,next ) => {
    console.log("PUT CART")
    const body = req.body
    // tu codigo aqui

    return res.status(200).json([])
  },

  // cuando el usuario agregue el primer item al carrito
  createOne: async (req, res,next ) => {
    console.log("CREATE CART")
    // tu codigo aqui

    return res.status(200).json([])
  },

  deleteOne: async (req, res,next ) => {
    console.log("CREATE CART")
    // tu codigo aqui

    return res.status(200).json([])
  },

};

module.exports = cartProducts_controller;
