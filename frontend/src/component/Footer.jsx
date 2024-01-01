import React, { useState } from "react";
import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Function to handle input changes
  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  // var submited = false;
  // const handleSubmit = () => {
  //   alert("Your response has been successfully submitted");
  //   window.location.reload();
  // };
  var submitted = false;
  return (
    <div className="py-12 pt-20 bg-zinc-50" id="footer">
      <div className="sm:mx-20  xs:mx-8">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 gap-8 h-full ">
          <div className=" xs:mb-5">
            <h1 className="text-2xl mb-12 text-firstColor font-semibold">
              JayFoodie Restuarant
            </h1>
            <div className="flex text-xl text-firstColor my-3">
              <FaFacebook className="mr-3" />
              <FaInstagram className=" mr-3" />
              <FaTwitter className=" mr-3" />
              <FaYoutube />
            </div>
            <div className="flex mt-5 text-sm w-[90%]">
              <span>
                <FaAddressBook />
              </span>
              <p className="ml-2 mt-[-3px] text-zinc-600 font-medium">
                1/3 Marina Road Off Broad Street, Marina, Lagos-State, Nigeria.
              </p>
            </div>
            <div className="flex my-3 text-sm  w-[90%]">
              <span>
                <FaMailBulk />
              </span>
              <p className="ml-2 mt-[-3px] text-zinc-600">
                jaji.moshood1297@gmail.com
              </p>
            </div>
            <div className="flex mt-2 text-sm w-[90%]">
              <span>
                <FaPhoneAlt />
              </span>
              <p className="ml-2  mt-[-3px] text-zinc-600">
                +234 809 068 6548 <br /> +234 815 588 8980
              </p>
            </div>
          </div>
          <div className="xs:mb-5 ">
            <h2 className="text-2xl mb-12 text-firstColor font-semibold">
              Contact Us
            </h2>
            <iframe
              title="Google Form Submission"
              name="hidden_iframe"
              id="hidden_iframe"
              style={{ display: "none" }}
              onLoad={() => {
                if (submitted) {
                  alert("Your response has been successfully submitted");
                }
              }}
            ></iframe>
            <div className="w-[95%]  text-sm">
              <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf9WLfJbhROIiLCgkvaruq8zs-4gTzMQ-HXeJVfYMHmPIaMfg/formResponse"
                // onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    name="entry.1994729641"
                    placeholder="Name"
                    onChange={handleInputChange}
                    className="w-full"
                    // name= 'name'
                    // value={formData.name}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="entry.1328250020"
                    placeholder="Email"
                    className="contact-input w-full"
                    onChange={handleInputChange}
                  
                    // name='email'
                    // value={formData.email}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="entry.1874333904"
                    placeholder="Subject"
                    className="contact-input w-full"
                    onChange={handleInputChange}
                    // value={formData.subject}
                    // name="subject"
                  />
                </div>
                <div>
                  <textarea
                    className="h-[8rem] w-full p-3 outline-zinc-100 outline-none"
                    onChange={handleInputChange}
                    name="entry.1015071916"
                    placeholder="Message"
                    // value={formData.message}
                    // name='message'
                  />
                </div>
                <button className=" buttonp my-6 text-center cursor-pointer ">
                  <span className="z-10 ">Submit</span>
                </button>
              </form>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-12 text-firstColor font-semibold">
              Opening Hours
            </h2>
            <div className="mb-8">
              <ul className="text-sm">
                <li className="flex justify-between pb-1">
                  <span> Mon to Thurs</span>
                  <span>08:00 am - 10.00 pm</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Fri</span>
                  <span>08:00 am - 11:00 pm</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span> Sat to Sun</span>
                  <span>08.00 am - 10.00 pm</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span> Sunday </span>
                  <span>08.00 am - 10.00 pm</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" text-xl font-semibold  my-3">
                
                FOR RESERVATION
              </h2>
              <p className="text-sm ">
                Book online or Give Us a Call to make Your Reservation on +234
                809 068 6548
              </p>
              <p className="text-sm mt-3">8am – 4am Everyday of the Week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
