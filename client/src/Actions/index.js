export const GET_DOGS = "GET_ALL_DOGS";
export const GET_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const GET_DOG_BY_FILTER = "GET_DOG_BY_FILTER";
export const SET_DOGS_TEMPERAMENTS = "SET_DOGS_TEMPERAMENTS";
export const SET_DOGS_CREATED = "SET_DOGS_CREATED";
export const SET_DOGS_ALPHABETICAL_ASC = "SET_DOGS_ALPHABETICAL_ASC";
export const SET_DOGS_ALPHABETICAL_DESC = "SET_DOGS_ALPHABETICAL_DESC";
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
      const response = await fetch(`${url}dogs?nameQuery=${name}`)
      const dogJson = await response.json();
      return dispatch({type: GET_DOG_BY_FILTER, payload: dogJson });
    } catch (error) {
      console.error(error);
    }
  }
}

export const setDogsTemperament = (dogs)=>{
  return (dispatch)=>{
    return dispatch({type: SET_DOGS_TEMPERAMENTS, payload: dogs});
  }
}

export const setDogsCreated = (dogs)=>{
  return (dispatch)=>{
    return dispatch({type: SET_DOGS_CREATED, payload: dogs});
  }
}

export const setDogsFilterAlphabeticalAsc = (dogs) =>{
  return (dispatch)=>{
    console.log("reducer asc")
    console.log(dogs)
    return dispatch({type: SET_DOGS_ALPHABETICAL_ASC, payload:dogs})
  }
}

export const setDogsFilterAlphabeticalDesc = (dogs) =>{
  return (dispatch)=>{
    return dispatch({type: SET_DOGS_ALPHABETICAL_DESC, payload:dogs})
  }
}


export const paginated = (change) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_PAGE, payload: change });
  };
};
