import React from "react";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import PaginatedFilter from "../Components/PaginatedFilter";

const FilterDog = ()=>{
    return(
    <React.Fragment>
        <NavBar/>
        <Filter/>
        <PaginatedFilter/>
        <Footer/>
    </React.Fragment>
    )
}

export default FilterDog;