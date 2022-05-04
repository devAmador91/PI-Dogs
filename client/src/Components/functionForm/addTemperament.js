import validate from "./validationForm"

const addTemperament = (e,input,setInput, setError) =>{
    if(!input.temperament.includes(e.target.value)){
        setInput((i)=>{return{...i, temperament:[...i.temperament,e.target.value]}})
        setError(validate({...input, temperament:[...input.temperament,e.target.value]}))
    }
}

export default addTemperament;