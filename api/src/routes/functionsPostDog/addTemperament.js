const { sequelize } = require("../../db");
const { Temperament } = sequelize.models;

const addTemperament = async(dog,temperament) => {

    const dogTemperament = await Temperament.findAll({
        where: {
            name:temperament
        }
    })

    await dog.addTemperament(dogTemperament);
}

module.exports = addTemperament;