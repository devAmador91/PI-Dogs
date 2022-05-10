export const GET_DOGS = "GET_ALL_DOGS";
export const GET_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const GET_DOGS_BY_FILTERS = "GET_DOGS_BY_FILTERS";
export const CLEAN_FILTER = "CLEAN_FILTER";
export const CHANGE_PAGE = "CHANGE_PAGE";
export let url = "http://localhost:3001/";

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}dogs`);
      const dogsJson = await response.json();
      return dispatch({ type: GET_DOGS, payload: dogsJson });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}temperaments`);
      const temperamentsJson = await response.json();
      return dispatch({ type: GET_TEMPERAMENTS, payload: temperamentsJson });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDogByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}dogs?nameQuery=${name}`);
      const dogJson = await response.json();
      return dispatch({ type: GET_DOG_BY_NAME, payload: dogJson });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDogByfilters = (dogs) => {
  return (dispatch) => {
    return dispatch({ type: GET_DOGS_BY_FILTERS, payload: dogs });
  };
};

export const cleanFilter = () => {
  return (dispatch) => {
    dispatch({ type: CLEAN_FILTER, payload: [] });
  };
};

export const paginated = (change) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_PAGE, payload: change });
  };
};



