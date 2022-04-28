import { GET_DOGS } from "../Actions";
import { GET_TEMPERAMENTS } from "../Actions";

const initialState = {
  allDogs: [],
  allTemperaments: [],
};

const  rootReducer = (state = initialState, action) => {
  switch (action.payload) {
    case GET_DOGS: {
      return {
        ...state,
        allDogs: action.payload,
      };
    }

    case GET_TEMPERAMENTS: {
      return {
        ...state,
        allTemperaments: action.payload,
      };
    }

    default: {
        return state
    }
  }
};

export default rootReducer;

