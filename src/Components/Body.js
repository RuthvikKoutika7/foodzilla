import ResturantCard , {isOpenLabel} from "./ResturantCard";
//import resList from "../Utils/mockdata";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useSwiggyData from "../Utils/useSwiggyData";
import UserContext from "../Utils/UserContext";

const Body = () =>  {

    const [listOfResturants,setListOfResturants] = useState([]);
    const [filteredRestaurent,setFilterRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const OpenedRestaurant = isOpenLabel(ResturantCard);
    // const listOfResturants = useSwiggyData();
    // const filteredRestaurent = useSwiggyData(); 
    const {loggedInUser, setUserName} = useContext(UserContext);
          

    useEffect(()=>{
        fetchData();
    } ,[]);

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_API);
        const json= await data.json();
       
        setListOfResturants(json?.data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurent(json?.data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants);

        // data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants
    };
    console.log(listOfResturants);

    // if(listOfResturants.length === 0){
    //     return <Shimmer />
    // }
    if(onlineStatus === false)
        return (<h1>OOOPPPSSS😲😲😲!!!! you are Offline. Please check your Internet </h1>);
   

    return listOfResturants.length === 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex">
                <div className="p-4 m-4 flex">
                    <input type="text" className=" m-4 border border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="m-3 bg-gray-300 px-4 py-2 rounded-xl" onClick={()=>{
                        const filteredRestaurents = listOfResturants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilterRestaurent(filteredRestaurents);
                        
                    }}>
                        Search Resturant
                    </button>
                </div>
                <button className="bg-gray-300 px-2 py-0 m-9 rounded-xl flex items-center" onClick={()=> {
                    const filteredList= listOfResturants.filter((res) => res.info.avgRating > 4); 
                    setFilterRestaurent(filteredList);
                    //console.log("Button Clicked" )
                }} onMouseOver={()=>console.log("Hoverd")}>
                    Top Rated Restaurants
                    </button>
                    <div className="mx-4 p-4 flex items-center">
                <label>UserName : </label>
                <input value={loggedInUser} className="mx-2 border border-black px-2" onChange={(e)=> setUserName(e.target.value)} />
            </div>    
            </div>
           
            <div className="flex flex-wrap p-4 m-4 border-2 border-gray-800">
               {
                filteredRestaurent.map((resturant) => (
                <Link key={resturant.info.id} to={"/restaurants/" + resturant.info.id}>
                    {resturant.info.isOpen ? (<OpenedRestaurant resData={resturant} />) : (<ResturantCard  resData={resturant}/>)} 
                    {/* <ResturantCard  resData={resturant}/> */}
                    </Link>
                    ))
               }
                
                
            </div>
        </div>
    );
};

export default Body; 


// components have separated building and deploying the code using gradle or maven 
// Map filter reduce being used for fuctionality or javascript function
// Virtul DOM is the most x factor in reactjs for building fast responsive Web application
// we use npm node to build the UI based coded application
// Risk Management component 



//j use state = new(Reslist, setResList){ ruthvik koutika progammer analyst trainee

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4369224&lng=78.3862556&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING