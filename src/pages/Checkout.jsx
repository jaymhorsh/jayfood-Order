import React, { useState } from "react";
// import Input from "../utils/Input";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PaystackButton } from "react-paystack"


const Checkout = () => {
  const cartCtx = useContext(CartContext)
  const shipping = 5.0;
  const taxes = 8.32;
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const orderTotal = cartTotal + shipping + taxes;
  const [checkout, setCheckout] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    direction: "",
    payMethod: "",
    amount: +orderTotal
  });
  
  const [didEdit, setDidEdit] = useState({
    fullName: false,
    phoneNumber: false,
    address: false,
  });
  function handleInputBlur({ target: { name } }) {
    setDidEdit({ ...checkout, [name]: true });
  }
  // Form Validation
  const nameIsInvalid = didEdit.fullName && checkout.fullName.length <= 0;
  const addressIsInvalid = didEdit.address && checkout.address.length <= 0;
  const phoneNumber = didEdit.phoneNumber && !checkout.phone.length === 11;

  const changeHandler = ({ target: { name, value } }) => {
    setCheckout({ ...checkout, [name]: value });
    setDidEdit({ ...didEdit, [name]: false });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(checkout);
    try {
      const response = await fetch('http://localhost:5000/orders', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              order: {
                  items: cartCtx.items,
                  customer: checkout,
                  // ToPayment: orderTotal
              },
          }),
      });

      if (response.ok) {
          toast.success('Order Placed Successfully!');
          // toast.success(`${response.message}`);

      } else {
          toast.error('Failed to place order. Please try again.', {
              // position: toast.POSITION.TOP_CENTER,
          });
      }
  } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred. Please try again later.', {
          position: toast.POSITION.TOP_CENTER,
      });
  }
  
    setCheckout({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      direction: "",
      payMethod: "",
      amount
    });
  };
  let paymethod = 'SEND';
  if (checkout.payMethod === "PayNow") {
    paymethod = <span>PROCEED T0 PAYMENT</span>;
  }
  if (checkout.payMethod === "PayOnDelivery") {
    paymethod = <span>CONFIRM ORDER</span>;
  }

  const { fullName, phone, email, amount } = checkout;
  const publicKey = 'pk_test_c97c1e226ce51973b9759013a404b36af87eef99';
  
  const componentProps = {
   email,
    amount,
    metadata: {
      fullName,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  
  }
  return (

    <>
    <ToastContainer/>
    <div className="bg-zinc-100 h-full">
      <div className=" max-w-[75rem] m-auto  ">
        <div className="py-6 px-4">
          <div>
            <p className="text-xl"> Delivery information </p>
          </div>
          <div>

          </div>
          <div className="mt-10 ">
           
            <form onSubmit={handleSubmit}>
            
              <div className="m-auto md:w-[40%]">
                <div className=" grid grid-cols-1   gap-3 py-12 px-6 rounded-md bg-white h-full">
                <p className="text-2xl text-teal-700 font-semibold">Total Amount: NGN {orderTotal}</p>
                  <div className="flex flex-col">
                    <label>Name</label>
                    {/* <span>
                      {nameIsInvalid && (
                        <p className="text-red-700">Please fill this field.</p>
                      )}
                    </span> */}
                    <input
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
                    <label> Phone Number</label>
                    <input
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
                    <label> Email</label>
                    <input
                      className={` mt-2 box-border border-b-slate-800 border border-transparent  outline-none py-1 text-base`}
                      type="text"
                      name="email"
                      value={checkout.email}
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label> Address</label>
                    <input
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
                    <label> Address Instruction</label>
                    <input
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
                          value="PayOnDelivery"
                          checked={checkout.payMethod === "PayOnDelivery"}
                          onChange={changeHandler}
                          required
                        />
                        <span className="pl-2"> Pay on Delivery</span>
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <button
                      className=" btn rounded-sm cursor-pointer"
                      type="submit"
                    >
                      <span className="z-10 ">{paymethod}</span>
                     
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <PaystackButton {...componentProps} />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Checkout;
