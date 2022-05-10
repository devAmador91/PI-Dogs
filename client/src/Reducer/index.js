import { GET_DOGS } from "../Actions";
import { GET_TEMPERAMENTS } from "../Actions";
import { GET_DOG_BY_NAME } from "../Actions";
import { GET_DOGS_BY_FILTERS } from "../Actions";
import { CLEAN_FILTER } from "../Actions";
import { CHANGE_PAGE } from "../Actions";

const initialState = {
  allDogs: [],
  allTemperaments: [],
  filter: [],
  paginated: { numPage: 0 },
};

const rootReducer = (state = initialState, action) => {
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

    case GET_DOG_BY_NAME: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case GET_DOGS_BY_FILTERS: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case CLEAN_FILTER: {
      return {
        ...state,
        filter: action.payload ,
      };
    }

    case CHANGE_PAGE: {
      return {
        ...state,
        paginated: { numPage: action.payload },
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
