const structurePaginated = require("../structurePaginated");

const joinBdApi = (Bd,Api) =>{
    Bd.map((dog)=>{
        const {image,name,temperament,height} = dog;
        Api.unshift({image,name,temperament,height})
    });
    return structurePaginated(Api);
}

module.exports = joinBdApi;