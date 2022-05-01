const structurePaginated = (dogs) => {

    let structure = [];
    let start = 0;
    let end = 8;
    let totalDogs = Math.ceil(dogs.length / 8);

    for(let i = 0; i < totalDogs;i++){
        structure.push(dogs.slice(start,end));
        start += 8;
        end += 8;
    }

    return structure;

};

module.exports = structurePaginated;
