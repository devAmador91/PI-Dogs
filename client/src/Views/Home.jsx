import React from "react";
import { Container } from "../Styles/Styles-Home";
import NavBar from "../Components/NavBar";
import Dogs from "../Components/Dogs";
import PaginatedHome from "../Components/PaginatedHome";


const Home = () => {
  return (
    <Container>
      <NavBar/>
      <Dogs/>
      <PaginatedHome/>
    </Container>
  );
};

export default Home;
