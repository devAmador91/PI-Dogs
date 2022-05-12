import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container,ContainerForm,ContainerInput,ContainerImg,H1,Img,Label,Button,DeleteButton,Error,Input,} from "../Styles/Styles-Form";
import dogDefault from "../Styles/Img/Dog-Default/pug.webp";
import addTemperament from "./functionForm/addTemperament";
import deleteTemperament from "./functionForm/deleteTemperament";
import handledChange from "./functionForm/handledChange";
import handledSubmit from "./functionForm/handledSubmit";
import { concatValues } from "./functionForm/concatValues";
import DogCreated from "./DogCreated";

const Form = () => {
  const [error, setError] = useState({});
  const [dogCreated, setDog] = useState({});
  const [input, setInput] = useState({
    name: "",
    heightMin: "0",
    heightMax: "0",
    height: "",
    weightMin: "0",
    weightMax: "0",
    weight: "",
    yearsMin: "0",
    yearsMax: "0",
    yearsLife: "",
    temperament: [],
    img: "",
  });
  console.log(input)

  const temperaments = useSelector((state) => state.allTemperaments);

  return !Object.keys(dogCreated).length ? (
    <React.Fragment>
      <Container>
        <ContainerForm>
          <H1 id="h1">Create your dog</H1>
          <ContainerImg>
            <form>
              <ContainerInput>
                <Label>Name:</Label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  placeholder="salchicha"
                  onChange={(e) => handledChange(e, setInput, input, setError)}
                ></input>
                {error.name && <Error>{error.name}</Error>}
                {error.existDog && <Error>{error.existDog}</Error>}
              </ContainerInput>

              <ContainerInput>
                <Label>Temperament:</Label>
                <select
                  name="temperament"
                  onChange={(e) => addTemperament(e, input, setInput, setError)}
                >
                  {temperaments.length &&
                    temperaments.map((t) => (
                      <option key={t.name} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                </select>
                {!input.temperament.length && error.temperament && (
                  <Error>{error.temperament}</Error>
                )}
                {input.temperament.length
                  ? input.temperament.map((t) => (
                      <DeleteButton
                        key={t}
                        onClick={(e) =>
                          deleteTemperament(e, setInput, input, setError)
                        }
                      >
                        {t}
                      </DeleteButton>
                    ))
                  : null}
              </ContainerInput>

              <ContainerInput>
                <Label>Imperial Height Value Min: {input.heightMin}</Label>
                <Input
                  type="range"
                  name="heightMin"
                  value={input.heightMin}
                  min="1"
                  max="80"
                  onChange={(e) => {
                    handledChange(e, setInput, input, setError);
                    concatValues(
                      setInput,
                      "height",
                      e.target.value,
                      input.heightMax
                    );
                  }}
                ></Input>

                {error.heightMin && <Error>{error.heightMin}</Error>}
                <Label>Imperial Height Value Max: {input.heightMax}</Label>
                <Input
                  type="range"
                  name="heightMax"
                  value={input.heightMax}
                  min={input.heightMin}
                  max="100"
                  onChange={(e) => {
                    handledChange(e, setInput, input, setError);
                    concatValues(
                      setInput,
                      "height",
                      input.heightMin,
                      e.target.value
                    );
                  }}
                ></Input>

                {error.heightMax && <Error>{error.heightMax}</Error>}
              </ContainerInput>

              <ContainerInput>
                <Label>Imperial Weight Value Min: {input.weightMin}</Label>
                <input
                  type="range"
                  name="weightMin"
                  value={input.weightMin}
                  min="1"
                  max="100"
                  onChange={(e) => {
                    handledChange(e, setInput, input, setError);
                    concatValues(
                      setInput,
                      "weight",
                      e.target.value,
                      input.weightMax
                    );
                  }}
                ></input>
                {error.weightMin && <Error>{error.weightMin}</Error>}
                <Label>Imperial Weight Value Max: {input.weightMax}</Label>
                <input
                  type="range"
                  name="weightMax"
                  value={input.weightMax}
                  min={input.weightMin}
                  max="150"
                  onChange={(e) => {
                    handledChange(e, setInput, input, setError);
                    concatValues(
                      setInput,
                      "weight",
                      input.weightMin,
                      e.target.value
                    );
                  }}
                ></input>
                {error.weightMax && <Error>{error.weightMax}</Error>}
              </ContainerInput>

              <ContainerInput>
                <Label>Life Year Value Min: {input.yearsMin}</Label>
                <input
                  type="range"
                  name="yearsMin"
                  value={input.yearsMin}
                  min="1"
                  max="100"
                  onChange={(e) => {
                    handledChange(e, setInput, input, setError);
                    concatValues(
                      setInput,
                      "yearsLife",
                      e.target.value,
                      input.yearsMax
                    );
                  }}
                ></input>
                {error.yearsMin && <Error>{error.yearsMin}</Error>}
                <Label>Life Year Value Max: {input.yearsMax}</Label>
                <input
                  type="range"
                  name="yearsMax"
                  value={input.yearsMax}
                  min={input.yearsMin}
                  onChange={(e) => {
                    handledChange(e, setInput, input, setError);
                    concatValues(
                      setInput,
                      "yearsLife",
                      input.yearsMin,
                      e.target.value
                    );
                  }}
                ></input>
                {error.yearsMax && <Error>{error.yearsMax}</Error>}
              </ContainerInput>

              <ContainerInput>
                <Label>Img:</Label>
                <input
                  type="text"
                  name="img"
                  value={input.img}
                  placeholder="http://imagen.com/perro"
                  onChange={(e) => handledChange(e, setInput, input, setError)}
                ></input>
                {error.img && <Error>{error.img}</Error>}
              </ContainerInput>
            </form>
            <Img src={input.img ? input.img : dogDefault}></Img>
          </ContainerImg>
        </ContainerForm>
        {Object.keys(error).length === 0 && (
          <Button onClick={(e) =>{ handledSubmit(e, input, setDog, setError);document.getElementById('h1').innerHTML="Loading..."}}>
            Create
          </Button>
        )}
      </Container>
    </React.Fragment>
  ) : (
    <DogCreated dogCreated={dogCreated} setDog={setDog} setInput={setInput}/>
  );
};

export default Form;
