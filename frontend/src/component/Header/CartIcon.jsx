import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/CartContext";
import { useNavigate } from "react-router-dom";

const CartIcon = ({ showCart }) => {
  const navigate = useNavigate()
  const cartCtx = useContext(CartContext);
  // convert the array into single value
  // recieves 2 argument/parameters (callback-function and starting/initial value )
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const handleClick = () => {
    // Navigate to the shopping cart page
    navigate("/cart"); 
  };
 
  return (
    <div className={`relative cursor-pointer`} onClick={handleClick}>
      <div className="flex items-center justify-center hover:text-firstColor gap-2 ">
        <FaShoppingCart className="text-3xl  cursor-pointer" />
        <span> Cart</span>
      </div>
      <span className="absolute text-white  bottom-5 left-4 text-xs py-[1px] px-[4px]  flex justify-center  items-center text-center rounded-full bg-firstColor  ">
        {totalCartItems}
      </span>
    </div>
  );
};

export default CartIcon;
