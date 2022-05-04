import validate from "./validationForm";

const handledChange = (e, setInput, input, setError) => {
  setInput((input) => {
    return {
      ...input,
      [e.target.name]: e.target.value,
    };
  });
  setError(validate({ ...input, [e.target.name]: e.target.value }));
};

export default handledChange;
