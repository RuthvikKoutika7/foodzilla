import { useDispatch } from "react-redux";
import CDN_URL from "../Utils/constants";
import { addItems } from "../Utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch =useDispatch();
  const handleAddItem= (item) =>{
    // we are dispatching action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                - {"Rs."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 m-auto bg-black text-white rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
