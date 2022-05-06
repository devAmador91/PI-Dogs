import React from "react";
import Filter from "../Components/Filter";
import NavBar from "../Components/NavBar";
import PaginatedFilter from "../Components/PaginatedFilter";

const FilterDog = ()=>{
    return(
    <React.Fragment>
        <NavBar/>
        <Filter/>
        <PaginatedFilter/>
    </React.Fragment>
    )
}

export default FilterDog;