const resetValues = (setDog, setInput)=>{
    setDog({});
    setInput({
      name: "",
      heightMin: "0",
      heightMax: "0",
      height: "",
      weightMin: "0",
      weightMax: "0",
      weight: "",
      yearsMin: "0",
      yearsMax: "0",
      yearsLife: "",
      temperament: [],
      img: "",
    })
  }

  export default resetValues;