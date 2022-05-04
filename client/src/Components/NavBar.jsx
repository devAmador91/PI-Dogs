import { useSelector } from "react-redux";
import logoDog from "../Styles/Img/Img-Landing-Page/fingerPrint.png";
import { ContainerAll, Temperament } from "../Styles/styles-Navbar";
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

const NavBar = () => {

  
  const temperaments = useSelector((state)=>state.allTemperaments);
  console.log(temperaments)

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <ContainerAll>
      <ContainerLogoSearchBar>
        <ContainerLogoTitle>
          <Img src={`${logoDog}`} alt="FingerPrint dog"></Img>
          <H1>facedog</H1>
        </ContainerLogoTitle>

        <ContainerSearchBar>
          <form onSubmit={() => handleSubmit()}>
            <input
              type="search"
              placeholder="Bulldog"
              name="search"
              onChange={() => handleChange()}
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
              {temperaments.map((t)=><Temperament key={t.name} value={t.name}>{t.name}</Temperament>)}
            </Ul>
          </List>
        </ContainerUl>

        <ContainerUl>
          <List>
            <Link to="#">Dog created</Link>
            <Ul>
              <Li>Hola</Li>
              <Li>Hola</Li>
              <Li>Hola</Li>
            </Ul>
          </List>
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
              <Li>Hola</Li>
              <Li>Hola</Li>
              <Li>Hola</Li>
            </Ul>
          </List>
        </ContainerUl>

        <ContainerUl>
          <List>
            <Link to="#">About</Link>
            <Ul></Ul>
          </List>
        </ContainerUl>
      </ContainerOptions>
    </ContainerAll>
  );
};

export default NavBar;
