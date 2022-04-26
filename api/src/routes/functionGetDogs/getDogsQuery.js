
const getDogsQuery = (name,dogs)=>{
    return dogs.find((dog)=>dog.name === name);
}

module.exports = getDogsQuery;