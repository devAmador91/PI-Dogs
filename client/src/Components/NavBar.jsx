import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logoDog from "../Styles/Img/Img-Landing-Page/fingerPrint.png";
import { ContainerAll } from "../Styles/styles-Navbar";
import { Img } from "../Styles/styles-Navbar";
import { ContainerLogoSearchBar } from "../Styles/styles-Navbar";
import { ContainerLogoTitle } from "../Styles/styles-Navbar";
import { ContainerSearchBar } from "../Styles/styles-Navbar";
import { H1 } from "../Styles/styles-Navbar";
import { ContainerOptions } from "../Styles/styles-Navbar";
import { ContainerUl } from "../Styles/styles-Navbar";
import { List } from "../Styles/styles-Navbar";
import { Li } from "../Styles/styles-Navbar";
import { Ul } from "../Styles/styles-Navbar";
import { Link } from "../Styles/styles-Navbar";
import { getTemperaments } from "../Actions";
import { getDogByName } from "../Actions";
import { useNavigate } from "react-router-dom";
import { setDogsTemperament } from "../Actions";
import { setDogsCreated } from "../Actions";
import { Button } from "../Styles/styles-Navbar";

const NavBar = () => {
  const [input, setInput] = useState({ dog: "" });
  //const [error, setError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.allTemperaments);
  const dogs = useSelector((state) => state.allDogs);

  const handleChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //mandar el input por props a la pagina filter para renderizar la busqueda
    dispatch(getDogByName(input.dog));
    navigate("/filter");
  };

  const filterTemperaments = (e) => {
    const filteredDogs = [];
    dogs.forEach((page) =>
      page.forEach((dog) => {
        if (dog.temperament) {
          if (dog.temperament.includes(e.target.textContent)) {
            filteredDogs.push(dog);
          }
        }
      })
    );
    dispatch(setDogsTemperament(filteredDogs));
    navigate("/filter");
  };

  const filterDogCreated = () => {
    const filteredDogs = [];
    dogs.forEach((page) =>
      page.forEach((dog) => {
        if (typeof dog.id === "string") {
          filteredDogs.push(dog);
        }
      })
    );
    dispatch(setDogsCreated(filteredDogs));
    navigate("/filter");
  };

  const filterAlphabeticalAsc = () => {//la api ya esta ordenada alfabeticamente a-Z
    const sortArray = (x, y) => {
      if (x.name < y.name) {
        return -1;
      }
      if (x.name > y.name) {
        return 1;
      }
      return 0;
    };
    const filteredDogs = dogs.sort(sortArray);
    console.log(filteredDogs);
  };

  return (
    <ContainerAll>
      <ContainerLogoSearchBar>
        <ContainerLogoTitle to={"/home"}>
          <Img src={`${logoDog}`} alt="FingerPrint dog"></Img>
          <H1>facedog</H1>
        </ContainerLogoTitle>

        <ContainerSearchBar>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="search"
              placeholder="Bulldog"
              name="dog"
              value={input.dog}
              onChange={(e) => handleChange(e)}
            />
            <input type={"submit"} value="Search"></input>
          </form>
        </ContainerSearchBar>
      </ContainerLogoSearchBar>

      <ContainerOptions>
        <ContainerUl>
          <List>
            <Link to="#">Temperaments</Link>
            <Ul>
              {temperaments.map((t, i) => (
                <Li onClick={(e) => filterTemperaments(e)} key={i}>
                  {t.name}
                </Li>
              ))}
            </Ul>
          </List>
        </ContainerUl>

        <ContainerUl>
          <Button onClick={() => filterDogCreated()}>Dog created</Button>
        </ContainerUl>

        <ContainerUl>
          <List>
            <Link to="/createDog">Create Dog</Link>
          </List>
        </ContainerUl>

        <ContainerUl>
          <List>
            <Link to="#">Order</Link>
            <Ul>
              <Li onClick={() => filterAlphabeticalAsc()}>A-Z</Li>
              <Li>Z-A</Li>
              <Li>Weight</Li>
            </Ul>
          </List>
        </ContainerUl>

        <ContainerUl>
          <List>
            <Link to="#">About</Link>
          </List>
        </ContainerUl>
      </ContainerOptions>
    </ContainerAll>
  );
};

export default NavBar;
