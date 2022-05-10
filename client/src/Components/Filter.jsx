
import React, { useEffect } from "react";
import {useSelector} from "react-redux";
import { Container, BackGround } from "../Styles/Styles-Filter";
import Dog from "./Dog";
import structurePaginated from "./structurePaginated";
import dogLoading from "../Styles/Img/Loading/dog-loading1.gif";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dogs = structurePaginated(filter);
  const {numPage} = useSelector((state) => state.paginated);
  const navigate = useNavigate();


  useEffect(()=>{
    filter.msg && navigate("/notFound");
  })

  return (
    <React.Fragment>
      <Container>
        <BackGround>
          {filter.length ? dogs.length &&
            dogs[numPage].map((dog,i) => (
              <Dog
                key={i}
                id={dog.id}
                image={dog.img}
                name={dog.name}
                temperament={dog.temperament}
                weight={dog.weight}
              />
            )): <img src={dogLoading} alt="loading img"></img>}
        </BackGround>
      </Container>
    </React.Fragment>
    
  );
  
};

export default Filter;
