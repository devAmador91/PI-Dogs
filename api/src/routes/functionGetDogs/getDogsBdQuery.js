
const getDogBdQuery = (name,bd)=>{
    return bd.filter((dog)=>dog.name.includes(name));   
}

module.exports = getDogBdQuery;