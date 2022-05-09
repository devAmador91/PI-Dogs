import { GET_DOGS } from "../Actions";
import { GET_TEMPERAMENTS } from "../Actions";
import { GET_DOG_BY_FILTER } from "../Actions";
import { SET_DOGS_TEMPERAMENTS } from "../Actions";
import { SET_DOGS_CREATED } from "../Actions";
import { SET_DOGS_ORDER_ASC } from "../Actions";
import { SET_DOGS_ORDER_DESC } from "../Actions";
import { SET_DOGS_ORDER_WEIGHT } from "../Actions";
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

    case GET_DOG_BY_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case SET_DOGS_TEMPERAMENTS: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case SET_DOGS_CREATED: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case SET_DOGS_ORDER_ASC: {
      return {
        ...state,
        filter: action.payload
      }
    }

    case SET_DOGS_ORDER_DESC: {
      return {
        ...state,
        filter: action.payload
      }
    }

    case SET_DOGS_ORDER_WEIGHT: {
      return {
        ...state,
        filter: action.payload
      }
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
