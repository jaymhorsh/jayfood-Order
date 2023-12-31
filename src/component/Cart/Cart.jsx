import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItems from "./CartItems";
import Formater from "../../utils/Formater";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the shopping cart page
    navigate("/");
  };
  const handlecheckout = () => {
    // Navigate to the shopping cart page
    navigate("/checkout");
  };

  const cartCtx = useContext(CartContext);
  const shipping = +5.0;
  const taxes = +8.32;
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const orderTotal = cartTotal + shipping + taxes;

  //
  let content = "";
  if (cartCtx.items.length === 0 || cartCtx.items.length < 0) {
    content = (
      <div className=" flex w-full flex-col  mt-5 h-[70vh] justify-center items-center">
        <div className="p-6 bg-zinc-100 rounded-full mt-4">
          <FaShoppingCart className="text-[80px] text-teal-400 " />
        </div>
        <div className="mt-3 text-center">
          <p> Your Cart is Empty</p>
          <p className="pt-2">
            Browse our categories and discover our best deals!
          </p>
        </div>
        <button
          className="btn mt-10 w-[15rem] py-3 text-lg"
          onClick={handleClick}
        >
          Start Shopping
        </button>
      </div>
    );
  }
  return (
    <div className="pt-12 xs:px-4 md:px-12 h-full">
      <h2 className="font-bold text-zinc-900 text-3xl mb-3">Shopping Cart</h2>
      <button
        className="flex items-center gap-1"
        onClick={() => {
          navigate("/");
        }}
      >
        <FaLongArrowAltLeft />
        <span>Go back to Menu</span>
      </button>
      {content}
      {cartCtx.items.length > 0 && (
        <div className="md:grid grid-cols-12  mt-4 flex flex-col ">
          <section className="col-span-7 ">
            <div className="md:mt-8">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200 overflow-y-scroll xs:mt-4  sm:h-[80vh]">
                  {cartCtx.items.map((item) => (
                    <CartItems
                      key={item.id}
                      item={item}
                      onIncrease={() => cartCtx.addItem(item)}
                      onDecrease={() => cartCtx.removeItem(item.id)}
                      onRemove={() => {
                        cartCtx.remove(item.id);
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </section>
          {/* xs:absolute xs:bottom-0 xs:left-0 right-0 xs:px-4 */}
          <section className="col-span-5 ">
            <div className="border-t border-gray-200 md:px-4 py-6 sm:px-6">
              <h2 className="pb-6 text-xl font-semibold">Order Summary</h2>
              <div className="flex justify-between py-4 border-b text-sm font-medium text-gray-900">
                <p>Subtotal</p>
                <p> {Formater.format(cartTotal)}</p>
              </div>
              <div className="flex justify-between  py-4 border-b text-sm font-medium text-gray-900">
                <p>Shipping estimate</p>
                <p> {Formater.format(5.0)}</p>
              </div>
              <div className="flex justify-between py-4 border-b text-sm font-medium text-gray-900">
                <p>Tax estimate</p>
                <p> {Formater.format(8.32)}</p>
              </div>
              <div className="flex justify-between py-4 border-b text-lg font-semibold  text-gray-900">
                <p>Order Total:</p>
                <p> {Formater.format(orderTotal)}</p>
              </div>

              <div className="mt-6">
                <button
                  onClick={handlecheckout}
                  className="flex items-center w-full justify-center rounded-md border border-transparent bg-firstColor px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-altColor"
                >
                  Checkout
                </button>
              </div>
              <div className="mt-5 flex justify-center text-center  text-sm text-gray-500">
                <h3>
                  or
                  <button
                    type="button"
                    className="mt-1 pl-1 text-firstColor hover:text-altColor "
                    onClick={handleClick}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr; </span>
                  </button>
                </h3>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Cart;
