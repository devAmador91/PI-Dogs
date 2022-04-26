
const getDogBdQuery = (name,bd)=>{
    return bd.find((dog)=> dog.name === name);   
}

module.exports = getDogBdQuery;