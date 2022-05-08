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
import {
  setDogsFilterAlphabeticalDesc,
  setDogsFilterAlphabeticalAsc,
} from "../Actions";
import { setDogsOrderWeight } from "../Actions";
import { Button } from "../Styles/styles-Navbar";
import { paginated } from "../Actions";

const NavBar = () => {
  const [input, setInput] = useState({ dog: "" });
  //const [error, setError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.allTemperaments);
  const allDogs = useSelector((state) => state.allDogs);

  const handleChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(paginated(0));
    const nameDog = input.dog.charAt(0).toUpperCase() + input.dog.slice(1);
    dispatch(getDogByName(nameDog));
    navigate("/filter");
  };

  const filterTemperaments = (e) => {
    const filteredDogs = [];
    allDogs.forEach((dog) => {
      if (dog.temperament) {
        if (dog.temperament.includes(e.target.textContent)) {
          filteredDogs.push(dog);
        }
      }
    });
    dispatch(paginated(0));
    dispatch(setDogsTemperament(filteredDogs));
    navigate("/filter");
  };

  const filterDogCreated = () => {
    const filteredDogs = [];

    allDogs.forEach((dog) => {
      if (typeof dog.id === "string") {
        filteredDogs.push(dog);
      }
    });

    dispatch(paginated(0));
    dispatch(setDogsCreated(filteredDogs));
    navigate("/filter");
  };

  const filterAlphabeticalAsc = () => {
    console.log("entre Asc");
    const sortArray = (x, y) => {
      if (x.name < y.name) {
        return -1;
      }
      if (x.name > y.name) {
        return 1;
      }
      return 0;
    };
    let filteredDog = [];
    allDogs.sort(sortArray).forEach((dog) => filteredDog.push(dog));
    dispatch(paginated(0));
    dispatch(setDogsFilterAlphabeticalAsc(filteredDog));
    navigate("/filter");
  };

  const filterAlphabeticalDesc = () => {
    console.log("entre desc");
    const sortArray = (x, y) => {
      if (x.name > y.name) {
        return -1;
      }
      if (x.name < y.name) {
        return 1;
      }
      return 0;
    };
    let filteredDog = [];
    allDogs.sort(sortArray).forEach((dog) => filteredDog.push(dog));
    dispatch(paginated(0));
    dispatch(setDogsFilterAlphabeticalDesc(filteredDog));
    navigate("/filter");
  };

  const filterWeightAsc = () => {

    const orderMin = allDogs.sort((a, b) =>{
      if(Number(a.weight.split(' ')[0]) < Number(b.weight.split(' ')[0])){
        return -1;
      }
       
       if(Number(a.weight.split(' ')[0]) > Number(b.weight.split(' ')[0])){
        return 1;
      }
       return 0;
    })
    
    const sortArrayMax = (a, b) =>{
      if(Number(a.weight.split(' ')[a.weight.split(' ').length-1]) < Number(b.weight.split(' ')[b.weight.split(' ').length-1])){
        return -1;
      }
       
       if(Number(a.weight.split(' ')[a.weight.split(' ').length-1]) > Number(b.weight.split(' ')[b.weight.split(' ').length-1])){
        return 1;
      }
       return 0;
    }
    const orderMax = []
    orderMin.sort(sortArrayMax).forEach((dog)=> orderMax.push(dog));
    dispatch(paginated(0));
    dispatch(setDogsOrderWeight(orderMax));
    navigate("/filter");
  };


  const filterWeightDesc = () => {

    const orderMin = allDogs.sort((a, b) =>{
      if(Number(a.weight.split(' ')[0]) > Number(b.weight.split(' ')[0])){
        return -1;
      }
       
       if(Number(a.weight.split(' ')[0]) < Number(b.weight.split(' ')[0])){
        return 1;
      }
       return 0;
    })

    const sortArrayMax = (a, b) =>{
      if(Number(a.weight.split(' ')[a.weight.split(' ').length-1]) > Number(b.weight.split(' ')[b.weight.split(' ').length-1])){
        return -1;
      }
       
       if(Number(a.weight.split(' ')[a.weight.split(' ').length-1]) < Number(b.weight.split(' ')[b.weight.split(' ').length-1])){
        return 1;
      }
       return 0;
    }
    const orderMax = []
    orderMin.sort(sortArrayMax).forEach((dog)=> orderMax.push(dog));
    dispatch(paginated(0));
    dispatch(setDogsOrderWeight(orderMax));
    navigate("/filter");
  };

  const returnHome = ()=>{
    dispatch(paginated(0));
    navigate("/home")
  }

  return (
    <ContainerAll>
      <ContainerLogoSearchBar>
        <ContainerLogoTitle onClick={()=>returnHome()}>
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
              <Li onClick={() => filterAlphabeticalDesc()}>Z-A</Li>
              <Li onClick={() => filterWeightAsc()}>Weight Asc</Li>
              <Li onClick={() => filterWeightDesc()}>Weight Desc</Li>
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
