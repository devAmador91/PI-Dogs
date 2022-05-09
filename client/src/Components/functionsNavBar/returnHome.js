import { paginated } from "../../Actions";

export const returnHome = (dispatch, navigate) => {
    dispatch(paginated(0));
    navigate("/home");
  };