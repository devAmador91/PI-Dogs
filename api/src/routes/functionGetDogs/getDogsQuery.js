
const getDogsQuery = (name,dogs)=>{
    return dogs.filter((dog)=>dog.name.includes(name));
}

module.exports = getDogsQuery;