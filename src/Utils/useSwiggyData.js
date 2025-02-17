import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";

const useSwiggyData = () =>{

    const [listOfResturants,setListOfResturants] = useState([]);
    const [filteredRestaurent,setFilterRestaurent] = useState([]);

    useEffect(()=>{
            fetchData();
        } ,[]);
    
        const fetchData = async () =>{
            const data = await fetch(SWIGGY_API);
            const json= await data.json();
           // console.log(json);
            setListOfResturants(json?.data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants);
            setFilterRestaurent(json?.data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants);
    
            // data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants
        };

    return({listOfResturants,filteredRestaurent});    
}

export default useSwiggyData;