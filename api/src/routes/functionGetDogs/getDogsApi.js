const fetch = require("node-fetch");
require('dotenv').config();
const {API_KEY} = process.env;
const URL = 'https://api.thedogapi.com/v1/breeds';
const structurePaginated = require('../structurePaginated');

const getDogsApi = async(res) =>{
    try {
    const response = await fetch(`${URL}?api_key=${API_KEY}`);
    const jsonDogs = await response.json();
    const dogCharacteristics = jsonDogs.map((d)=>{
        return dog = {
            id: d.id,
            img: d.image.url,
            name: d.name,
            temperament: d.temperament,
            weight: d.weight.imperial
        }
    });
    return dogCharacteristics
    } catch (error) {
        res.json(error)
    }
    
}

module.exports = getDogsApi;