import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import CDN_URL from "../Utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    locality,
    sla,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(
    "cards info",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  //const {itemCards : i} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
  //console.log("i value :", i);
  //itemCards.push(...i);
  //console.log("itemCards :", itemCards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="border-2 border-gray-500 p-4 m-4 ">
      <h1 className="text-6xl font-bold text-center">{name}</h1>
      <div className="flex justify-center items-center">
        <img className="  w-60 m-2" src={CDN_URL + cloudinaryImageId} />
      </div>

      <div className="border-2 border-gray-100 m-2 p-4 ">
        <h3 className="flex justify-center items-center">
          ⭐️ {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </h3>
        <h4 className="flex justify-center items-center">
          {cuisines.join(",")}
        </h4>
        <h5 className="flex justify-center items-center">📍📍📍 {locality}</h5>
        <h5 className="flex justify-center items-center">
          {" "}
          🚶‍♂️🕒 {sla.minDeliveryTime} - {sla.maxDeliveryTime} Minutes
        </h5>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex = {()=> setShowIndex(index)}
          //showIndex={()=>showIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
