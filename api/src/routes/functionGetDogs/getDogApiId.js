const fetch = require("node-fetch");
require('dotenv').config();
const {API_KEY} = process.env;
const URL = 'https://api.thedogapi.com/v1/breeds';

const getDogApiId = async(id,res) =>{
    try {
    const response = await fetch(`${URL}?api_key=${API_KEY}`);
    const jsonDogs = await response.json();
    const foundDogApi = jsonDogs.find((d)=>d.id === parseInt(id));
    const {image,name,temperament,height} = foundDogApi;
    dogCharacteristics = {image,name,temperament,height};

    return dogCharacteristics;

    } catch (error) {
        res.status(404).json({msg:'Id dont exist', error: 404});
    }
    
}

module.exports = getDogApiId;