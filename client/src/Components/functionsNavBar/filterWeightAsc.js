import { getDogByfilters } from "../../Actions";
import { paginated } from "../../Actions";

export const filterWeightAsc = (allDogs, dispatch, navigate) => {
  const orderMin = allDogs.sort((a, b) => {
    if (Number(a.weight.split(" ")[0]) < Number(b.weight.split(" ")[0])) {
      return -1;
    }

    if (Number(a.weight.split(" ")[0]) > Number(b.weight.split(" ")[0])) {
      return 1;
    }
    return 0;
  });

  const sortArrayMax = (a, b) => {
    if (
      Number(a.weight.split(" ")[a.weight.split(" ").length - 1]) <
      Number(b.weight.split(" ")[b.weight.split(" ").length - 1])
    ) {
      return -1;
    }

    if (
      Number(a.weight.split(" ")[a.weight.split(" ").length - 1]) >
      Number(b.weight.split(" ")[b.weight.split(" ").length - 1])
    ) {
      return 1;
    }
    return 0;
  };
  const orderMax = [];
  orderMin.sort(sortArrayMax).forEach((dog) => orderMax.push(dog));
  dispatch(paginated(0));
  dispatch(getDogByfilters(orderMax));
  navigate("/filter");
};
