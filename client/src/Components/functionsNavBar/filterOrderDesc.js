import { getDogByfilters } from "../../Actions";
import { paginated } from "../../Actions";


export const filterOrderDesc = (allDogs, dispatch, navigate) => {
    const sortArray = (x, y) => {
      if (x.name > y.name) {
        return -1;
      }
      if (x.name < y.name) {
        return 1;
      }
      return 0;
    };
    let filteredDog = [];
    allDogs.sort(sortArray).forEach((dog) => filteredDog.push(dog));
    dispatch(paginated(0));
    dispatch(getDogByfilters(filteredDog));
    navigate("/filter");
  };