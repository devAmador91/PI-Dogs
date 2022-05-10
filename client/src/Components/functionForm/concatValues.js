export const concatValues = (setInput,propiety, valueMin, valueMax)=>{
    setInput((input) => {
      return { ...input, [`${propiety}`]: `${valueMin} - ${valueMax}` };
    });
  }