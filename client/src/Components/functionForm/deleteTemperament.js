import validate from "./validationForm";

const deleteTemperament = (e,setInput, input, setError) =>{
    setInput((i)=>{return{...i, temperament: i.temperament.filter((nameTemperament)=>nameTemperament !== e.target.innerText)}})
    setError(validate({...input, temperament: input.temperament.filter((nameTemperament)=>nameTemperament !== e.target.innerText)}))
}

export default deleteTemperament;