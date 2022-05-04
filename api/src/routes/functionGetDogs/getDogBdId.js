const { sequelize } = require("../../db");
const { Dog, Temperament } = sequelize.models;

const getDogBDId = async (id) => {
  try {
    const dog = await Dog.findOne({
      where: { id },
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const { name, height, weight, yearsLife, img } = dog.dataValues;
    const temperament = dog.dataValues.Temperaments.map(
      (t) => t.dataValues.name
    ).join();

    return { id, name, height, weight, yearsLife, img, temperament };
  } catch (error) {
    console.log("Dog not found in Bd");
  }
};

module.exports = getDogBDId;
