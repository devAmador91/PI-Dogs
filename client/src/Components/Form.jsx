import React, { useState } from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { Container } from "../Styles/Styles-Form";
import { ContainerForm } from "../Styles/Styles-Form";
import { ContainerInput } from "../Styles/Styles-Form";
import { ContainerImg } from "../Styles/Styles-Form";
import { H1 } from "../Styles/Styles-Form";
import { Img } from "../Styles/Styles-Form";
import { Label } from "../Styles/Styles-Form";
import dogDefault from "../Styles/Img/Dog-Default/pug.webp";
import { Button } from "../Styles/Styles-Form";
import addTemperament from "./functionForm/addTemperament";
import deleteTemperament from "./functionForm/deleteTemperament";
import { DeleteButton } from "../Styles/Styles-Form";
import handledChange from "./functionForm/handledChange";
import handledSubmit from "./functionForm/handledSubmit";
import DogCreated from "./DogCreated";
import { Error } from "../Styles/Styles-Form";
import { Input } from "../Styles/Styles-Form";

const Form = () => {
  const [error, setError] = useState({});
  const [dogCreated, setDog] = useState({});
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    yearsLife: "",
    temperament: [],
    img: "",
  });

  const temperaments = useSelector((state) => state.allTemperaments);

  return !Object.keys(dogCreated).length ? (
    <React.Fragment>
      <NavBar />
      <Container>
        <ContainerForm>
          <H1>Create your dog</H1>
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
                <Label>Height Imperial:</Label>
                <Input
                  type="text"
                  name="height"
                  value={input.height}
                  placeholder="25-30"
                  onChange={(e) => handledChange(e, setInput, input, setError)}
                ></Input>
                {error.height && <Error>{error.height}</Error>}
              </ContainerInput>

              <ContainerInput>
                <Label>Weight Imperial:</Label>
                <input
                  type="text"
                  name="weight"
                  value={input.weight}
                  placeholder="20-40"
                  onChange={(e) => handledChange(e, setInput, input, setError)}
                ></input>
                 {error.weight && <Error>{error.weight}</Error>}
              </ContainerInput>

              <ContainerInput>
                <Label>Years of life:</Label>
                <input
                  type="text"
                  name="yearsLife"
                  value={input.yearsLife}
                  placeholder="10-12 years"
                  onChange={(e) => handledChange(e, setInput, input, setError)}
                ></input>
                {error.yearsLife && <Error>{error.yearsLife}</Error>}
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
        {Object.keys(error).length === 0 && <Button onClick={(e) => handledSubmit(e, input, setDog)}>Create</Button>}
      </Container>
    </React.Fragment>
  ) : (
    <DogCreated dogCreated={dogCreated} />
  );
};

export default Form;
