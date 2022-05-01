import React from "react";
import { Container } from "../Styles/Styles-Dog";
import { Img } from "../Styles/Styles-Dog";
import { Name } from "../Styles/Styles-Dog";
import { Temperament } from "../Styles/Styles-Dog";
import { Weight } from "../Styles/Styles-Dog";
import { NavLink } from "react-router-dom";

const Dog = ({ id, image, name, temperament, weight }) => {
  return (
    <NavLink to={`/dogs/${id}`}>
      <Container>
        <Img src={image} />
        <Name>{name}</Name>
        <Temperament>{temperament}</Temperament>
        <Weight>{`Imperial: ${weight.imperial}`}</Weight>
      </Container>
    </NavLink>
  );
};

export default Dog;
