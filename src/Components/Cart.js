import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="">
      <div className="text-center m-4 p-4">
        <h1 className="font-bold text-4xl">Cart :</h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-4 bg-black text-white rounded-2xl"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (<h1 className="m-3 p-4 text-xl font-bold">Your cart is Empty ☹️☹️☹️.    Please addItems to the Cart🛒</h1>)}
          <ItemsList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
