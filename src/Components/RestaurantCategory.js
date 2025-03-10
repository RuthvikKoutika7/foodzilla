import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems,setShowIndex,showIndex }) => {
  console.log(data);
 // const [showItems,setShowItems]=useState(false);
  const handleClick = () =>{
   setShowIndex()
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  ">
        <div className="flex justify-between cursor-pointer " onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⌄</span>
        </div>
       { showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
