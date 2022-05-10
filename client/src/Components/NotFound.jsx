import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanFilter } from "../Actions";

export const NotFound = ({error}) => {
const dispatch = useDispatch();

useEffect(()=>{
 dispatch(cleanFilter()); 
})
  return (
    <div>
      <h1>Not found</h1>
      <p>{error}</p>  
    </div>
  );
};
