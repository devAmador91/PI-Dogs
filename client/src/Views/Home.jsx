import React from "react";
import { Container } from "../Styles/Styles-Home";
import NavBar from "../Components/NavBar";
import Dogs from "../Components/Dogs";
import Paginated from "../Components/Paginated";


const Home = () => {
  return (
    <Container>
      <NavBar/>
      <Dogs/>
      <Paginated/>
    </Container>
  );
};

export default Home;
