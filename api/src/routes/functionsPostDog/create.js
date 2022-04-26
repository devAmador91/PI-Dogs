const { sequelize } = require("../../db");
const { Dog } = sequelize.models;

const create = async (name, height, weight, yearsLife, img) => {
  try {
    const [createDog, isCreate] = await Dog.findOrCreate({
      where: {
        name,
      },
      defaults: {
        name,
        height,
        weight,
        yearsLife,
        img,
      },
    });
    return { createDog, isCreate };
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

module.exports= create;
