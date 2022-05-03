import { url } from "../../Actions";

const handledSubmit = async(e, input, setDog) => {
  e.preventDefault();
  const dog = await createDog(input);
  setDog(dog);
};

const createDog = async(input) =>{

    try {
        const response = await fetch(`${url}dog`, {
          method: "POST",
          body: JSON.stringify(input),
          headers: { "Content-Type": "application/json" },
        });
        const {createDog} = await response.json();

        return createDog;
 } catch (error) {
    console.error(error);
  }
  }



export default handledSubmit;
