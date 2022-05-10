const validate = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Dog name is required";
  } else if (!/^([A-Za-z])+$/.test(input.name)) {
    //permitir espacios
    errors.name =
      "Dog name is invalid, only letters are allowed, no special characters or numbers";
  }

  if (!input.temperament.length) {
    errors.temperament = "Temperaments is void";
  }

  if (input.heightMin === "0") {
    errors.heightMin = "The value cannot be zero";
  }

  if (input.heightMax === "0") {
    errors.heightMax = "The value cannot be zero";
  }

  if (Number(input.heightMin) > Number(input.heightMax)) {
    errors.heightMin =
      "The minimum height value must be less than the maximum height value.";
  }

  if (input.weightMin === "0") {
    errors.weightMin = "The value cannot be zero";
  }

  if (input.weightMax === "0") {
    errors.weightMax = "The value cannot be zero";
  }

  if (Number(input.weightMin) > Number(input.weightMax)) {
    errors.weightMin =
      "The minimum weight value must be less than the maximum weight value.";
  }

  if (input.yearsMin === "0") {
    errors.yearsMin = "The value cannot be zero";
  }

  if (input.yearsMax === "0") {
    errors.yearsMax = "The value cannot be zero";
  }

  if (Number(input.yearsMin) > Number(input.yearsMax)) {
    errors.yearsMin =
      "The minimum years value must be less than the maximum years value.";
  }

  if (!input.img) {
    errors.img = "Dog img is required";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(input.img)) {
    errors.img = "Url img is invalid";
  }

  if (input.hasOwnProperty("existDog")) {
    errors.existDog = input.existDog;
  }

  return errors;
};

export default validate;
