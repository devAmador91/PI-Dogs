import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Styles/Styles-Dogs";
import { BackGround } from "../Styles/Styles-Dogs";
import Dog from "./Dog";
import { getDogs } from "../Actions";


const Dogs = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.allDogs);
  const {numPage} = useSelector((state) => state.paginated);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <Container>
      <BackGround>
        {dogs.length &&
          dogs[numPage].map((dog) => (
            <Dog
              key={dog.id}
              id={dog.id}
              image={dog.image}
              name={dog.name}
              temperament={dog.temperament}
              weight={dog.weight}
            />
          ))}
      </BackGround>
    </Container>
  );
};

export default Dogs;
