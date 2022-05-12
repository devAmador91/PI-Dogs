import React from "react";
import { Container } from "../Styles/Styles-Home";
import NavBar from "../Components/NavBar";
import Dogs from "../Components/Dogs";
import PaginatedHome from "../Components/PaginatedHome";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <Container>
      <NavBar/>
      <Dogs/>
      <PaginatedHome/>
      <Footer/>
    </Container>
  );
};

export default Home;
