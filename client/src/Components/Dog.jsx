import React from "react";
import { Container,Img, Name, Temperament, Weight } from "../Styles/Styles-Dog";
import { NavLink } from "react-router-dom";

const Dog = ({ id, image, name, temperament, weight }) => {

  return (
    <NavLink to={`/dogs/${id}`}>
      <Container>
        <Img src={image} />
        <Name>{name}</Name>
        <Temperament>{temperament}</Temperament>
        <Weight>{`Imperial: ${weight}`}</Weight>
      </Container>
    </NavLink>
  );
};

export default Dog;
