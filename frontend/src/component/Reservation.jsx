import React, { useState } from "react";
import resImg from "../Assets/about.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const [reserve, setReserve] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    selectedDate: "",
    time: "",
    noOfGuests: "",
    specialRequest: "",
  });
  const [didEdit, setDidEdit] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
  });
  function handleInputBlur({ target: { name } }) {
    setDidEdit({ ...reserve, [name]: true });
  }
  // Form Validation
  const emailIsInvalid = didEdit.email && !reserve.email.includes("@");
  const fullNameIsEntered = didEdit.fullName && reserve.fullName.length <= 0;
  const phoneNumber = didEdit.phoneNumber && !reserve.phoneNumber.length === 11;


  // Form input Handler
  const reserveChangeHandler = ({ target: { name, value } }) => {
    setReserve({ ...reserve, [name]: value });
    setDidEdit({ ...didEdit, [name]: false });
  };

  const handleDateChange = (date) => {
    setReserve({
      ...reserve,
      selectedDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reserve);
    setReserve({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <div className="top-[70px] relative h-[450px]">
        <div className="h-[450px] flex w-full">
          <img src={resImg} alt="" className="w-full object-cover" />
        </div> 
        <div className="flex inset-2 bg-gray-700 opacity-90"></div>
        <div className="flex inset-0 flex-col absolute w-full h-full justify-center items-center backdrop-brightness-50 text-white">
          <h1 className="md:text-7xl text-5xl xs:text-4xl">
            Online Reservation
          </h1>

          <p className="pt-9 text-lg">
            Take a few minute to fill this simple and easy
          </p>
          <p className="text-lg text-center">
            JayKitch Restaurant & Lounge online Reservation Form
          </p>
        </div>
      </div>
      <div className="mt-[64px] xs:mt-[120px] bg-zinc-50 ">
        <div className=" md:py-20">
          <h2 className="text-2xl text-center pb-9">RESERVE A TABLE</h2>
          <form onSubmit={handleSubmit}>
            <div className="m-auto xs:w-[95%] w-[80%]">
              <div className=" grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-3">
                <div className="">
                  {/* <span>
                      {fullNameIsEntered && (
                        <p>Please fill the field.</p>
                      )}
                    </span> */}
                  <input
                    required
                    type="text"
                    name="fullName"
                    label="First Name"
                    value={reserve.fullName}
                    onChange={reserveChangeHandler}
                    onBlur={handleInputBlur}
                    placeholder="Name"
                    className={` newInput  ${
                      fullNameIsEntered ? "border-2 border-red-500" : " "
                    } `}
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    name="email"
                    label="Email"
                    onBlur={handleInputBlur}
                    value={reserve.email}
                    onChange={reserveChangeHandler}
                    placeholder="Email"
                    className={` newInput  ${
                      emailIsInvalid ? "border-2 border-red-500" : " "
                    } `}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="phoneNumber"
                    onBlur={handleInputBlur}
                    onChange={reserveChangeHandler}
                    placeholder="Phone Number"
                    className={` newInput  ${
                      phoneNumber ? "border-2 border-red-500" : " "
                    } `}
                  />
                </div>
                <div>
                  <select
                    name="noOfGuests"
                    onChange={reserveChangeHandler}
                    className="newInput  italic text-zinc-500 "
                    required
                    onBlur={handleInputBlur}
                    label="No Of Guests"
                    value={reserve.noOfGuests}
                  >
                    <option value="" selected disabled>
                      No of Guests
                    </option>
                    <option value="1 Person">1 Person</option>
                    <option value="2 Person">2 Person</option>
                    <option value="3 Person">3 Person</option>
                    <option value="4 Person">4 Person</option>
                    <option value="5 Person">5 Person</option>
                    <option value="6 Person">6 Person</option>
                    <option value="7 Person">7 Person</option>
                    <option value="8 Person">8 Person</option>
                    <option value="9 Person">9 Person</option>
                    <option value="10 Person">10 Person</option>
                  </select>
                </div>
                <div className="w-full block"> 
                  <DatePicker
                    placeholderText="Select a date"
                    dateFormat="dd/MM/yyyy"
                    required
                    onChange={handleDateChange}
                    selected={reserve.selectedDate}
                    value={reserve.selectedDate}
                    className="newInput"
                    inline={false}
                    
                    
                  />
                </div>
                <div>
                  <select
                    name="time"
                    onChange={reserveChangeHandler}
                    className="newInput  italic text-zinc-500 "
                    required
                  >
                    <option value="" selected disabled>
                      Time
                    </option>
                    <option value="11:00 am">11:00 pm</option>
                    <option value="4:00 pm">4:00 pm</option>
                    <option value="8:00 pm">8:00 pm</option>
                    <option value="6:00pm">6:00 pm</option>
                    <option value="10:00pm">10:00 pm</option>
                  </select>
                </div>
              </div>
              <h2 className="text-center text-xl my-9 "> Special Request </h2>
              <textarea
                name="specialRequest"
                onChange={reserveChangeHandler}
                value={reserve.specialRequest}
                rows={10}
                className=" p-3  w-full rounded-md border border-zinc-400 overflow-hidden  "
                placeholder="Your Message"
              />
            </div>
            <div className="flex justify-center">
              <button className="buttonp mt-16 text-center cursor-pointer ">
                <span className="z-10 ">SEND</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
