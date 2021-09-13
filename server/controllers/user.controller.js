const { User_Profile } = require(`../models`);

const user_controller = {
  edit: async (req, res, next) => {
    const { id } = req.body;
    try {
      const [numberAfected, user] = await User_Profile.update(req.body, {
        where: { id: id },
        returning: true,
      });
      //update nos retorna las filas que fueron afectadas y un arreglo de las mismas
      res.status(201).json(user[0]);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = user_controller;
