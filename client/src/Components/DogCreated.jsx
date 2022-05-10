import React from "react";
import { Container, Img, ContainerData, ContainerLabel, H1,
         ContainerImg, Label, ContainerForm, P } from "../Styles/Styles-DogCreated";

const DogCreated = ({dogCreated}) => {
  const { name, height, weight, yearsLife, temperament, img } = dogCreated;

  console.log(temperament)

  //Falta hacer join para traer el temperamento en Express

  return (
    <React.Fragment>
      <Container>
        <ContainerData>
          <H1>¡Dog Created!</H1>
          <ContainerForm>
            <ContainerLabel>
              <Label>Name:</Label>
              <P>{name}</P>

              <Label>Temperament:</Label>
              <P>{temperament}</P>

              <Label>Height Imperial:</Label>
              <P>{height}</P>

              <Label>Weight Imperial:</Label>
              <P>{weight}</P>

              <Label>Years of life:</Label>
              <P>{yearsLife}</P>
            </ContainerLabel>

            <ContainerImg>
              <Img src={img}></Img>
            </ContainerImg>
          </ContainerForm>
        </ContainerData>
      </Container>
    </React.Fragment>
  );
};

export default DogCreated;
