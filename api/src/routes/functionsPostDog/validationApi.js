const fetch = require("node-fetch");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds";

const validationApi = async (name, res) => {
  try {
    const response = await fetch(`${URL}?api_key=${API_KEY}`);
    const jsonDogs = await response.json();

    return (foundDogApi = jsonDogs.find((d) => d.name === name));
  } catch (error) {
    console.error(error);
    console.log("The dog name if not exist in the api");
  }
};

module.exports = validationApi;
