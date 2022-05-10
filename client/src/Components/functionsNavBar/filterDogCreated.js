import { getDogByfilters } from "../../Actions";
import { paginated } from "../../Actions";

export const filterDogCreated = (allDogs, dispatch, navigate) => {
    let filteredDogs = [];

    allDogs.forEach((dog) => {
      if (typeof dog.id === "string") {
        filteredDogs.push(dog);
      }
    });

    if(!filteredDogs.length){
      filteredDogs = {msg:"No user created dogs"}
    }

    dispatch(paginated(0));
    dispatch(getDogByfilters(filteredDogs));
    navigate("/filter");
  };