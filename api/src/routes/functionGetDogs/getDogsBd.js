const { sequelize } = require("../../db");
const { Dog, Temperament } = sequelize.models;

const getDogsBd = async (res) => {
  try {
    const dog = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    return dog.map((d) => {
      return ({ id, name, height, weight, yearsLife, img, Temperaments } =
        d.dataValues);
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = getDogsBd;
