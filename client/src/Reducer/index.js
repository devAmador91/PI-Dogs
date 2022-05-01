import { GET_DOGS } from "../Actions";
import { GET_TEMPERAMENTS } from "../Actions";
import { CHANGE_PAGE } from "../Actions";

const initialState = {
  allDogs: [],
  allTemperaments: [],
  paginated:{numPage:0}
};

const  rootReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case CHANGE_PAGE: {
      return {
        ...state,
        paginated:{numPage:action.payload}
      }
    }

    default: {
        return state
    }
  }
};

export default rootReducer;

