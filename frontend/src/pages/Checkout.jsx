import React, { useState } from "react";
// import Input from "../utils/Input";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PaystackButton } from "react-paystack";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const shipping = 5.0;
  const taxes = 8.32;

  const clearCart = () => {
    cartCtx.clearCart();

  };
  const calculateCartTotal = () => {
    return cartCtx.items.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    );
  };

  const cartTotal = calculateCartTotal();
  let orderTotal = cartTotal + shipping + taxes;
console.log(orderTotal)
  let initialCheckoutState = {
    fullName: "",
    phone: "",
    email: "",
    address: "",
    direction: "",
    payMethod: "",
    amount: +orderTotal,
  };

  const [checkout, setCheckout] = useState(initialCheckoutState);
  const [didEdit, setDidEdit] = useState({
    fullName: false,
    phone: false,
    address: false,
  });

  const handleInputBlur = ({ target: { name } }) => {
    setDidEdit({ ...didEdit, [name]: true });
  };

  // Form Validation
  const nameIsInvalid = didEdit.fullName && checkout.fullName.length <= 0;
  const addressIsInvalid = didEdit.address && checkout.address.length <= 0;
  const phoneNumber = didEdit.phoneNumber && !checkout.phone.length === 11;

  //changing state immuttably and preventing rerendering
  const changeHandler = ({ target: { name, value } }) => {
    setCheckout((checkout) => ({ ...checkout, [name]: value }));
    setDidEdit((didEdit) => ({ ...didEdit, [name]: false }));
  };
  const resetCheckout = () => {
    setCheckout(initialCheckoutState);
    clearCart()
    console.log(orderTotal)
    orderTotal = 0
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(checkout);
    try {
      if (checkout.payMethod === "payOnDelivery") {
        //locally
        // const response = await fetch("https://localhost:5000/orders", {
        const response = await fetch("https://jayfood-order.vercel.app/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order: {
              items: cartCtx.items,
              customer: checkout,
            },
          }),
        });

        if (response.ok) {
          toast.success("Order Placed Successfully!");
          resetCheckout();
          // navigate("/menu", { replace: true });
        } else {
          toast.error("Failed to place order. Please try again.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred. Please try again later.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const { fullName, phone, email, amount } = checkout;
  console.log(amount);
  const publicKey = "pk_test_c97c1e226ce51973b9759013a404b36af87eef99";
  const componentProps = {
    email,
    amount: parseInt(amount * 100),
    metadata: {
      fullName,
      phone,
    },
    publicKey,
    text: `Proceed To Pay ₦${orderTotal}`,
    channels: ["card", "bank_transfer", "ussd"],
    onSuccess: () => {
      toast.success("Thanks for doing business with us! Come back soon!!");
      resetCheckout();
      navigate("/", { replace: true });
    },
    onClose: () => {
      toast.success("Wait, Dont Leave!");
    },
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-zinc-100 h-full">
        <div className=" max-w-[75rem] m-auto  ">
          <div className="py-6 px-4">
            <div>
              <p className="text-xl"> Delivery information </p>
            </div>
            <div></div>
            <div className="mt-10 ">
              <form onSubmit={handleSubmit}>
                <div className="m-auto md:w-[40%]">
                  <div className=" grid grid-cols-1   gap-3 py-12 px-6 rounded-md bg-white h-full">
                    <button
                      className="flex items-center gap-1"
                      onClick={() => {
                        navigate("/cart");
                      }}
                    >
                      <FaLongArrowAltLeft />
                      <span>Return</span>
                    </button>
                    <p className="text-2xl text-teal-700 font-semibold">
                      Pay: ₦{orderTotal}
                    </p>
                    <div className="flex flex-col">
                      <label htmlFor="fullName">Name</label>
                      {/* <span>
                      {nameIsInvalid && (
                        <p className="text-red-700">Please fill this field.</p>
                      )}
                    </span> */}
                      <input
                        id="fullName"
                        className={`${
                          nameIsInvalid ? "border-b-red-500" : ""
                        } mt-2 box-border border-b-slate-800 border border-transparent  outline-none py-1 text-base`}
                        type="text"
                        name="fullName"
                        value={checkout.fullName}
                        required
                        onChange={changeHandler}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="phone"> Phone Number</label>
                      <input
                        id="phone"
                        className={`${
                          phoneNumber ? "border-b-red-600" : ""
                        } mt-2 box-border border-b-slate-800 border border-transparent  outline-none py-1 text-base`}
                        type="number"
                        name="phone"
                        value={checkout.phone}
                        required
                        onChange={changeHandler}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email"> Email</label>
                      <input
                        id="email"
                        className={` mt-2 box-border border-b-slate-800 border border-transparent  outline-none py-1 text-base`}
                        type="text"
                        name="email"
                        value={checkout.email}
                        required
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address"> Address</label>
                      <input
                        id="address"
                        className={`${
                          addressIsInvalid ? "border-b-red-500" : ""
                        } mt-2 box-border border-b-slate-800 border border-transparent  outline-none py-1 text-base`}
                        type="text"
                        name="address"
                        value={checkout.address}
                        required
                        onChange={changeHandler}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="direction"> Address Instruction</label>
                      <input
                        id="direction"
                        className={` mt-2 box-border border-b-slate-800 border border-transparent  outline-none py-1 text-base`}
                        type="text"
                        name="direction"
                        value={checkout.direction}
                        required
                        onChange={changeHandler}
                      />
                    </div>
                    <div>
                      <p>Payment Method</p>
                      <div className="flex  mt-2 gap-3">
                        <label className="border py-3 px-2 w-full ">
                          <input
                            type="radio"
                            name="payMethod"
                            value="PayNow"
                            checked={checkout.payMethod === "PayNow"}
                            onChange={changeHandler}
                            required
                          />
                          <span className="pl-2"> Pay Now</span>
                        </label>

                        <label className="border py-3 px-2 w-full">
                          <input
                            type="radio"
                            name="payMethod"
                            value="payOnDelivery"
                            checked={checkout.payMethod === "payOnDelivery"}
                            onChange={changeHandler}
                            required
                          />
                          <span className="pl-2"> Pay on Delivery</span>
                        </label>
                      </div>
                    </div>
                    <div className="">
                      {checkout.payMethod === "payOnDelivery" && (
                        <button
                          className=" btn cursor-pointer rounded-sm bg-button  hover:bg-button-alt text-base"
                          type="submit"
                        >
                          <span className="z-10  text-white">Order Now</span>
                        </button>
                      )}
                      {checkout.payMethod === "PayNow" && (
                        <PaystackButton
                          className="btn  cursor-pointer  rounded-sm text-base text-white hover:bg-button-alt transition-all duration-300 ease-in-out bg-button"
                          {...componentProps}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
