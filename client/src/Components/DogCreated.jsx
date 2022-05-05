import React from "react";
import { Container, Img } from "../Styles/Styles-DogCreated";
import { ContainerData } from "../Styles/Styles-DogCreated";
import { ContainerLabel } from "../Styles/Styles-DogCreated";
import { H1 } from "../Styles/Styles-DogCreated";
import { ContainerImg } from "../Styles/Styles-DogCreated";
import { Label } from "../Styles/Styles-DogCreated";
import { ContainerForm } from "../Styles/Styles-DogCreated";
import { P } from "../Styles/Styles-DogCreated";

const DogCreated = (props) => {
  const { name, height, weight, yearsLife, temperament, img } =
    props.dogCreated;

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
              {temperament && temperament.map((t) => <p>{t}</p>)}

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
