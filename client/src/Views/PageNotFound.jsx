import React from "react";
import { NotFound } from "../Components/NotFound";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const PageNotFound = () => {
  return (
    <React.Fragment>
      <NavBar />
      <NotFound/>
      <Footer/>
    </React.Fragment>
  );
};

export default PageNotFound ;
