import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, BackGround } from "../Styles/Styles-Dogs";
import Dog from "./Dog";
import { getDogs } from "../Actions";
import structurePaginated from "./structurePaginated";
import dogLoading from "../Styles/Img/Loading/dog-loading1.gif";


const Dogs = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const dogs = structurePaginated(allDogs);
  const {numPage} = useSelector((state) => state.paginated);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <Container>
      <BackGround>
        {allDogs.length ? dogs.length &&
          dogs[numPage].map((dog) => (
            <Dog
              key={dog.id}
              id={dog.id}
              image={dog.img}
              name={dog.name}
              temperament={dog.temperament}
              weight={dog.weight}
            />
          )): <img src={dogLoading} alt="loading img"></img>}
          
      </BackGround>
    </Container>
    
  );
};

export default Dogs;
