const structurePaginated = require("../structurePaginated");

const joinBdApi = (Bd,Api) =>{
    
    Bd.map((dog)=>{
        const {id, img, name, weight } = dog;
        const temperament = dog.Temperaments.map((t)=>t.dataValues.name).join();
        Api[0].unshift({id,img,name,temperament,weight});
    });

//mandar a estructurar pero con nueva llamada a api
    
    return Api
}

module.exports = joinBdApi;