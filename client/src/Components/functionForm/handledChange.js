const handledChange = (e, setInput) => {
  setInput((input) => {
    return {
      ...input,
      [e.target.name]: e.target.value,
    };
  });
};

export default handledChange;
