const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^([A-Za-z])+$/,
      },
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    yearsLife: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    img:{
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });
};
