
const joinBdApi = (Bd,Api) =>{
    Bd.map((dog)=>{
        const {image,name,temperament,height} = dog;
        Api.unshift({image,name,temperament,height})
    });
    return Api;
}

module.exports = joinBdApi;