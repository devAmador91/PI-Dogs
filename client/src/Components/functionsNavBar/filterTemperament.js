import { getDogByfilters } from "../../Actions";
import { paginated } from "../../Actions";

export const filterTemperaments = (e, allDogs, dispatch, navigate) => {
  const filteredDogs = [];
  allDogs.forEach((dog) => {
    if (dog.temperament) {
      if (dog.temperament.includes(e.target.value)) {
        filteredDogs.push(dog);
      }
    }
  });
  dispatch(paginated(0));
  dispatch(getDogByfilters(filteredDogs));
  navigate("/filter");
};
