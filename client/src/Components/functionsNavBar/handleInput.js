import { getDogByName } from "../../Actions";
import { paginated } from "../../Actions";
import validate from "./validationInput";

export const handleChange = (e, setInput, input, setError) => {
  setInput({
    [e.target.name]: e.target.value,
  });
  setError(validate({...input, [e.target.name]: e.target.value }));
};

export const handleSubmit = (e, input, navigate, dispatch) => {
  e.preventDefault();
  dispatch(paginated(0));
  const nameDog = input.dog.charAt(0).toUpperCase() + input.dog.slice(1);
  dispatch(getDogByName(nameDog));
  navigate("/filter");
};
