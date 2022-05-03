const deleteTemperament = (e,setInput) =>{
    setInput((i)=>{return{...i, temperament: i.temperament.filter((nameTemperament)=>nameTemperament !== e.target.innerText)}})
}

export default deleteTemperament;