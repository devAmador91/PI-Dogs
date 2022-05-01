import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../Actions";
import { Container } from "../Styles/Styles-Form";
import { ContainerForm } from "../Styles/Styles-Form";
import { ContainerInput } from "../Styles/Styles-Form";
import { ContainerImg } from "../Styles/Styles-Form";
import { H1 } from "../Styles/Styles-Form";
import { Img } from "../Styles/Styles-Form";
import { Label } from "../Styles/Styles-Form";
import dogDefault from "../Styles/Img/Dog-Default/pug.webp";
import { Button } from "../Styles/Styles-Form";

const Form = () => {
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    heightImperial: 0,
    heightMetric: 0,
    weightImperial: 0,
    weightMetric: 0,
    yearsLife: "",
    temperament: [],
    img: "",
  });

  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.allTemperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  console.log(temperaments)

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <ContainerForm>
        <H1>Create your dog</H1>
          <ContainerImg>
            
            <form>
              <ContainerInput>
                <Label>Name:</Label>
                <input type="text" name="name" value={input.name}></input>
              </ContainerInput>

              <ContainerInput>
                <Label>Temperament:</Label>
                <select name="temperament">
                  {temperaments.length && temperaments.map((t)=><option key={t.name} value={t.name}></option>)}
                </select>
              </ContainerInput>

              <ContainerInput>
                <Label>Height Imperial:</Label>
                <select name="heightImperial"></select>
              </ContainerInput>

              <ContainerInput>
                <Label>Height Metric:</Label>
                <select name="heightMetric"></select>
              </ContainerInput>

              <ContainerInput>
                <Label>Weight Imperial:</Label>
                <select name="weightImperial"></select>
              </ContainerInput>

              <ContainerInput>
                <Label>Weight Metric:</Label>
                <select name="weightMetric"></select>
              </ContainerInput>

              <ContainerInput>
                <Label>Years of life:</Label>
                <select name="yearsLife"></select>
              </ContainerInput>

              <ContainerInput>
                <Label>Img:</Label>
                <input type="text" name="img" value={input.img}></input>
              </ContainerInput>
            </form>
            <Img src={input.img ? input.img : dogDefault}></Img>
          </ContainerImg>
        </ContainerForm>
        <Button>Create</Button>
      </Container>
    </React.Fragment>
  );
};

export default Form;
