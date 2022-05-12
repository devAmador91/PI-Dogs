import React from "react";
import Details from "../Components/Details";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const DogDetails = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Details />
      <Footer/>
    </React.Fragment>
  );
};

export default DogDetails;
