import React from "react";
import About from "../Components/About";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const AboutMe = () => {
  return (
    <React.Fragment>
      <NavBar />
      <About />
      <Footer/>
    </React.Fragment>
  );
};

export default AboutMe;