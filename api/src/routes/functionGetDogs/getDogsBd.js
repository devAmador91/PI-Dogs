const { sequelize } = require("../../db");
const { Dog, Temperament } = sequelize.models;

const getDogsBd = async (res) => {
  try {
    return await Dog.findAll({
      include: [
        {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      }
    ],
    });
  } catch (error) {
    console.log(error)
    res.json(error);
  }
};

module.exports = getDogsBd;