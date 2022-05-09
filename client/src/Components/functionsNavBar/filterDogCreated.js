import { setDogsCreated } from "../../Actions";
import { paginated } from "../../Actions";

export const filterDogCreated = (allDogs, dispatch, navigate) => {
    const filteredDogs = [];

    allDogs.forEach((dog) => {
      if (typeof dog.id === "string") {
        filteredDogs.push(dog);
      }
    });

    dispatch(paginated(0));
    dispatch(setDogsCreated(filteredDogs));
    navigate("/filter");
  };