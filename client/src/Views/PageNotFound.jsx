import React from "react";
import { NotFound } from "../Components/NotFound";
import NavBar from "../Components/NavBar";


const PageNotFound = () => {
  return (
    <React.Fragment>
      <NavBar />
      <NotFound/>
    </React.Fragment>
  );
};

export default PageNotFound ;
