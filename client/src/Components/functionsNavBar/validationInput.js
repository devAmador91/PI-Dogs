const validate = (input) => {
  let errors = {};

  if (!input.dog) {
    errors.name = undefined;
  } else {
    if (!/^([A-Za-z])+$/.test(input.dog)) {
      //permitir espacios
      errors.name =
        "Only letters are allowed, no special characters or numbers.";
    }
  }

  return errors;
};

export default validate;
