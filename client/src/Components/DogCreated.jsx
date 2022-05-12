import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Img, ContainerData, ContainerLabel, H1,
         ContainerImg, Label, ContainerForm, P, Button } from "../Styles/Styles-DogCreated";
import resetValues from "./functionDogCreated/resetValues";
import { getDogs } from "../Actions";

const DogCreated = ({dogCreated,setDog, setInput}) => {
  const { name, height, weight, yearsLife, temperament, img } = dogCreated;

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getDogs());
  },[dispatch])

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
