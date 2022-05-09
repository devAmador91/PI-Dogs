import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDogId } from "./functionDetails/getDogId";
import { Container, BackGround, H1, Img, P  } from "../Styles/Styles-Details";

const Details = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    getDogId(id, setDog);
  }, [id]);

  return (
    <React.Fragment>
      <Container>
        <BackGround>
          <H1>{dog.name}</H1>
          <Img src={dog.img} alt="img of dog"></Img>
          <P>{dog.temperament}</P>
          <P>{dog.weight}</P>
          <P>{dog.height}</P>
          <P>{dog.yearsLife}</P>
          <P>{id}</P>
        </BackGround>
      </Container>
    </React.Fragment>
  );
};

export default Details;
