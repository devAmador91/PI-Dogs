const router = require("express").Router();
const fetch = require("node-fetch");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds";
const formatTemperament = require("./functionsTemperaments/formatTemperament.js");
const { sequelize } = require("../db");
const { Temperament } = sequelize.models;

router.get("/temperaments", async (req, res) => {
  try {
    const response = await fetch(`${URL}?api_key=${API_KEY}`);
    const jsonDogs = await response.json();
    const temperamentsApi = formatTemperament(jsonDogs);

 
    
    await Temperament.bulkCreate(temperamentsApi);

    const temperamentsBd = await Temperament.findAll({ attributes: ["name"] });

    return res.json(temperamentsBd);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
