import { paginated } from "../../Actions";
import { getDogByfilters } from "../../Actions";


const filterDogApi = (allDogs, dispatch, navigate) => {
  dispatch(paginated(0));
  const filteredDog = allDogs.filter((dog)=>typeof(dog.id) === "number");
  dispatch(getDogByfilters(filteredDog));
  navigate("/filter");
};

export default filterDogApi;
