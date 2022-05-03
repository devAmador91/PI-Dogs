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
      type: DataTypes.STRING,
      
    },
    weight: {
      type: DataTypes.STRING,
      
    },
    yearsLife: {
      type: DataTypes.STRING,
      
    },
    img:{
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });
};
