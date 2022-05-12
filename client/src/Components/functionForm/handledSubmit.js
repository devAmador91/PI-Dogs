import { urlLocal } from "../../Actions";
import { urlBack } from "../../Actions";
import validate from "./validationForm";
const handledSubmit = async (e, input, setDog, setError) => {
  e.preventDefault();
  setError(validate(input));
  const error = validate(input);

  if (Object.keys(error).length === 0) {

    try {
      const response = await fetch(`${urlBack || urlLocal}dog`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json" },
      });
      const Dog = await response.json();

      if(Dog.hasOwnProperty("error")){
        setError(validate({...input,existDog:Dog.msg}));
      }else{
        setDog(Dog.foundDogBd);
      }
      
    } catch (error) {
      console.error(error);
    }
  }
};

export default handledSubmit;
