const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^([A-Za-z])+$/,
      },
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: /^([0-9])([0-9])\s([-])\s([0-9])([0-9])/
      }
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: /^([0-9])([0-9])\s([-])\s([0-9])([0-9])/
      }
    },
    yearsLife: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        is: /^([0-9])([0-9])\s([-])\s([0-9])([0-9])/
      }
    },
    img:{
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });
};
