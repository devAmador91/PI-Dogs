const fetch = require("node-fetch");
require('dotenv').config();
const {API_KEY} = process.env;
const URL = 'https://api.thedogapi.com/v1/breeds';

const validationApi = async (name,res) =>{
    try {
        const response = await fetch(`${URL}?api_key=${API_KEY}`);
        const jsonDogs = await response.json();
        const foundDogApi = jsonDogs.find((d)=>d.name === name);
        if(foundDogApi){
            return res.status(400).json({msg: "The dog name if exist in the api", error:400});
            }
        
    } catch (error) {
        console.log("The dog name if not exist in the api");
    }
       

} 

module.exports = validationApi;