
import React from "react";
import {useSelector} from "react-redux";
import { Container, BackGround } from "../Styles/Styles-Filter";
import Dog from "./Dog";
import structurePaginated from "./structurePaginated";



const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dogs = structurePaginated(filter);
  const {numPage} = useSelector((state) => state.paginated);

  return (
    <React.Fragment>
      <Container>
        <BackGround>
          {dogs.length &&
            dogs[numPage].map((dog,i) => (
              <Dog
                key={i}
                id={dog.id}
                image={dog.img}
                name={dog.name}
                temperament={dog.temperament}
                weight={dog.weight}
              />
            ))}
        </BackGround>
      </Container>
    </React.Fragment>
  );
};

export default Filter;
