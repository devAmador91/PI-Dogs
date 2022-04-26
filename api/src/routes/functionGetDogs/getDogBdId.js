const { sequelize } = require("../../db");
const { Dog } = sequelize.models;

const getDogBDId = async (id) => {
  try {
    return await Dog.findByPk(id);
  } catch (error) {
    console.log("Dog not found in Bd");
  }
};

module.exports = getDogBDId;
