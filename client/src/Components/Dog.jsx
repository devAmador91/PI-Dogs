import React from "react";
import { Container,Img, Name, Temperament, Weight} from "../Styles/Styles-Dog";
import { Link } from "../Styles/Styles-Dog";

const Dog = ({ id, image, name, temperament, weight}) => {

  return (
    <Link to={`/dogs/${id}`}>
      <Container>
        <Img src={image} />
        <Name>{name}</Name>
        <Temperament>{temperament}</Temperament>
        <Weight>{`Imperial: ${weight}`}</Weight>
      </Container>
    </Link>
  );
};

export default Dog;
