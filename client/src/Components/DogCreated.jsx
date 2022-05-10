import React from "react";
import { Container, Img, ContainerData, ContainerLabel, H1,
         ContainerImg, Label, ContainerForm, P } from "../Styles/Styles-DogCreated";
import resetValues from "./functionDogCreated/resetValues";
import { Button } from "../Styles/Styles-Form";

const DogCreated = ({dogCreated,setDog, setInput}) => {
  const { name, height, weight, yearsLife, temperament, img } = dogCreated;

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
          <Button onClick={()=>resetValues(setDog,setInput)}>Create Other</Button>
        </ContainerData>
      </Container>
    </React.Fragment>
  );
};

export default DogCreated;
