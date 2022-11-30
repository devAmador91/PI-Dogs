require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} = process.env;
const modelDog = require('./models/Dog.js');
const modelTemperament = require('./models/Temperament.js');

const sequelize = process.env.NODE_ENV === "production"
? new Sequelize({
    database: DB_NAME,
    dialect: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
    
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  })
: new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false,
  native: false, 
});

modelDog(sequelize);
modelTemperament(sequelize);

const { Dog, Temperament } = sequelize.models;

Dog.belongsToMany(Temperament, {through: 'Dog-Temperament'});
Temperament.belongsToMany(Dog, {through: 'Dog-Temperament'});


module.exports = {
  ...sequelize.models,
  sequelize: sequelize,
};
