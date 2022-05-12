import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDogId } from "./functionDetails/getDogId";
import { Container, Img, ContainerData, ContainerLabel, H1,
  ContainerImg, Label, ContainerForm, P } from "../Styles/Styles-Details";

const Details = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    getDogId(id, setDog);
  }, [id]);

  return (
    <React.Fragment>
      <Container>
        <ContainerData>
          <H1>{dog.name}</H1>
          <ContainerForm>
            <ContainerLabel>
              <Label>Temperaments:</Label>
              <P>{dog.temperament}</P>

              <Label>Weight:</Label>
              <P>{dog.weight}</P>

              <Label>Height:</Label>
              <P>{dog.height}</P>

              <Label>Years Life:</Label>
              <P>{dog.yearsLife}</P>
            </ContainerLabel>

            <ContainerImg>
              <Img src={dog.img}></Img>
 
            </ContainerImg>
          </ContainerForm>
        </ContainerData>
      </Container>
    </React.Fragment>
  );

};


export default Details;
