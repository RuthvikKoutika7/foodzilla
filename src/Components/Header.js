import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [loginBtn, setLoginBtn] = useState("Login ✅");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    // Subscribing to our store using Selector
    const cartItems = useSelector((store)=> store.cart.items);


    return (
        <div className="flex justify-between  bg-green-200 border-2 border-gray-800 rounded-xl">
            <div className="logo">
                <img className="w-40 p-2 rounded-3xl "  src= {LOGO_URL}/>
            </div>
            <div className="flex text-lg ">
                <ul className="flex items-center">
                    <li className="px-4 ">Online-Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 "><Link to="/">Home</Link></li>
                    <li className="px-4 "><Link to="/about">AboutUs</Link></li>
                    <li className="px-4 "><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 "><Link to="/cart"> <button className="cart-btn" onClick={() => {
                        console.log("Cart Opened")
                    }}>Cart 🛒🛒 ({cartItems.length})</button></Link></li>
                    <button className="px-4" onClick={() => {
                        loginBtn === "Login ✅" ? setLoginBtn("Logout ❌") : setLoginBtn("Login ✅");
                    }}>{loginBtn}</button>
                    <li className="text-xl font-bold pr-4">{loggedInUser}</li>
                    
                </ul>
            </div>
 
        </div>
    )
}

export default Header;