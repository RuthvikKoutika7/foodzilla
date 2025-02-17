import CDN_URL from "../Utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  //console.log(resData);
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
    sla,
  } = resData?.info;

  return (
    <div className="w-[300] p-4 m-4 bg-gray-100 hover:bg-gray-400">
      <img className="w-50 rounded-2xl" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-2xl font-bold ">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>⭐️ {avgRating}</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>{sla.deliveryTime} Minutes</h4> */}
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const isOpenLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Opened
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
