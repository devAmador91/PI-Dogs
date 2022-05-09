const validate = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Dog name is required";
  } else if (!/^([A-Za-z])+$/.test(input.name)) {
    //permitir espacios
    errors.name = "Dog name is invalid";
  }

  if (!input.height) {
    errors.height = "Dog height is required";
  }

  if (!input.weight) {
    errors.weight = "Dog weight is required";
  }

  if (!input.yearsLife) {
    errors.yearsLife = "Dog years of life is required";
  }

  if (!input.img) {
    errors.img = "Dog img is required";
  }

  if (!input.temperament.length) {
    errors.temperament = "Temperaments is void";
  }

  if(input.hasOwnProperty("existDog")){
    errors.existDog = input.existDog;
  }


  return errors;
};

export default validate;
