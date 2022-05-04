
const joinBdApi = (Bd, Api) =>{
    
    Bd.map((dataValues)=>{
        const {id, img, name, weight } = dataValues;
        const temperament = dataValues.Temperaments.map((t)=>t.dataValues.name).join();
        Api.unshift({id,img,name,temperament,weight});
    });
    
    return Api
}


module.exports = joinBdApi;