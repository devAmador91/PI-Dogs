import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logoDog from "../Styles/Img/Img-Landing-Page/fingerPrint.png";
import {ContainerAll,Img,ContainerLogoSearchBar,ContainerLogoTitle,ContainerSearchBar,H1,ContainerOptions,ContainerUl,
        List,Li,Ul,Link,Button,Select,Option,} from "../Styles/styles-Navbar";
import { Error } from "../Styles/Styles-Form";
import { getTemperaments } from "../Actions";
import { filterTemperaments } from "./functionsNavBar/filterTemperament";
import { filterDogCreated } from "./functionsNavBar/filterDogCreated";
import { filterOrderAsc } from "./functionsNavBar/filterOrderAsc";
import { filterOrderDesc } from "./functionsNavBar/filterOrderDesc";
import { filterWeightAsc } from "./functionsNavBar/filterWeightAsc";
import { filterWeightDesc } from "./functionsNavBar/filterWeightDesc";
import { returnHome } from "./functionsNavBar/returnHome";
import { handleChange, handleSubmit } from "./functionsNavBar/handleInput";

const NavBar = () => {
  const [input, setInput] = useState({ dog: "" });
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temperaments = useSelector((state) => state.allTemperaments);
  const allDogs = useSelector((state) => state.allDogs);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <ContainerAll>
      <ContainerLogoSearchBar>
        <ContainerLogoTitle onClick={() => returnHome(dispatch, navigate)}>
          <Img src={`${logoDog}`} alt="FingerPrint dog"></Img>
          <H1>facedog</H1>
        </ContainerLogoTitle>

        <ContainerSearchBar>
          <form onSubmit={(e) => handleSubmit(e, input, navigate, dispatch)}>
            <input
              type="search"
              placeholder="Bulldog"
              name="dog"
              value={input.dog}
              onChange={(e) => handleChange(e, setInput, input, setError)}
            />
            {!error.name && <input type={"submit"} value="Search"></input>}
            {error.name && <Error>{error.name}</Error>}
          </form>
        </ContainerSearchBar>
      </ContainerLogoSearchBar>

      <ContainerOptions>
        <ContainerUl>
          <Select
            onClick={(e) => filterTemperaments(e, allDogs, dispatch, navigate)}
          >
            {temperaments.length &&
              temperaments.map((t) => (
                <Option key={t.name} value={t.name}>
                  {t.name}
                </Option>
              ))}
          </Select>
        </ContainerUl>

        <ContainerUl>
          <Button onClick={() => filterDogCreated(allDogs, dispatch, navigate)}>
            Dog created
          </Button>
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
              <Li onClick={() => filterOrderAsc(allDogs, dispatch, navigate)}>
                A-Z
              </Li>
              <Li onClick={() => filterOrderDesc(allDogs, dispatch, navigate)}>
                Z-A
              </Li>
              <Li onClick={() => filterWeightAsc(allDogs, dispatch, navigate)}>
                Weight Asc
              </Li>
              <Li onClick={() => filterWeightDesc(allDogs, dispatch, navigate)}>
                Weight Desc
              </Li>
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
