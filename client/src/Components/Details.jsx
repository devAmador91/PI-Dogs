import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { Container } from "../Styles/Styles-Details";
import { BackGround } from "../Styles/Styles-Details";
import { H1 } from "../Styles/Styles-Details";
import { Img } from "../Styles/Styles-Details";
import { P } from "../Styles/Styles-Details";

const Details = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    const getDog = async () => {
      setDog(await getDogId(id));
    };
    getDog();
  }, [id]);

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <BackGround>
          <H1>{dog.name}</H1>
          <Img src={dog.image} alt="img of dog"></Img>
          <P>{dog.temperament}</P>
          <P>{dog.weightImperial}</P>
          <P>{dog.heightImperial}</P>
          <P>{dog.life_span}</P>
          <P>{id}</P>
        </BackGround>
      </Container>
    </React.Fragment>
  );
};

const getDogId = async (id) => {
  const response = await fetch(`http://localhost:3001/dogs/${id}`);
  const dogJson = await response.json();
  return dogJson;
};

export default Details;
