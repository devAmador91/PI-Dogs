const addTemperament = (e,input,setInput) =>{
    if(!input.temperament.includes(e.target.value)){
        setInput((i)=>{return{...i, temperament:[...i.temperament,e.target.value]}})
    }
}

export default addTemperament;