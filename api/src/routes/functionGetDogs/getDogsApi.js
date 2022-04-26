const fetch = require("node-fetch");
require('dotenv').config();
const {API_KEY} = process.env;
const URL = 'https://api.thedogapi.com/v1/breeds';

const getDogsApi = async(res) =>{
    try {
    const response = await fetch(`${URL}?api_key=${API_KEY}`);
    const jsonDogs = await response.json();
    const dogCharacteristics = jsonDogs.map((d)=>{
        return dog = {
            image: d.image.url,
            name: d.name,
            temperament: d.temperament,
            height: d.height
        }
    });
    return dogCharacteristics;
    } catch (error) {
        res.json(error)
    }
    
}

module.exports = getDogsApi;