import React from "react";
import {
  FaWineGlass,
  FaUserFriends,
  FaHeart,
  FaPalette,
  FaUtensils,
  FaHandsWash,
  FaSwimmingPool,
  FaWeight,
} from "react-icons/fa";
const Services = () => {
  return (
    <div className="w-full  mb-10" id="services">
      <div className="grid xs:pt-6 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:w-[70%] lg:w-[80%] xs:px-10  m-auto md:py-16 mt-10 ">
        <div className="flex flex-col items-center">
          <div className="my-5">
            <FaUtensils className="text-[70px] text-firstColor   rounded-full p-3.5 hover:bg-button hover:text-white transition-all ease-in-out duration-500 border-transparent border-4 hover:border-4 hover:border-zinc-200" />
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-base font-bold text-zinc-800 uppercase  ">
              Restuarant
            </h3>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              quaerat iste minima officia assumenda. Officia autem, ipsa
              eligendi totam accusantium aliquam illum corporis quisquam
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-5">
            <FaWineGlass className="text-[70px] text-firstColor   rounded-full p-3.5 hover:bg-button hover:text-white transition-all ease-in-out duration-500 border-transparent border-4 hover:border-4 hover:border-zinc-200" />
          </div>
          <div className="text-center">
            <h6 className="mb-4 text-base font-bold text-zinc-800 uppercase ">
              Bar and Lounge
            </h6>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              quaerat iste minima officia assumenda. Officia autem, ipsa
              eligendi totam accusantium aliquam illum corporis quisquam{" "}
            </p>
            -
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-5">
            <FaHandsWash className="text-[70px] text-firstColor   rounded-full p-3.5 hover:bg-button hover:text-white transition-all ease-in-out duration-500 border-transparent border-4 hover:border-4 hover:border-zinc-200" />
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-base font-bold text-zinc-800 uppercase ">
              Laundry
            </h3>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              quaerat iste minima officia assumenda. Officia autem, ipsa
              eligendi totam accusantium aliquam illum corporis quisquam{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-5">
            <FaUserFriends className="text-[70px] text-firstColor   rounded-full p-3.5 hover:bg-button hover:text-white transition-all ease-in-out duration-500 border-transparent border-4 hover:border-4 hover:border-zinc-200" />
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-base font-bold text-zinc-800 uppercase  ">
              Meet Up
            </h3>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              quaerat iste minima officia assumenda. Officia autem, ipsa
              eligendi totam accusantium aliquam illum corporis quisquam{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-5">
            <FaSwimmingPool className="text-[70px] text-firstColor   rounded-full p-3.5 hover:bg-button hover:text-white transition-all ease-in-out duration-500 border-transparent border-4 hover:border-4 hover:border-zinc-200" />
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-base font-bold text-zinc-800 uppercase ">
              Swimming Pool
            </h3>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              quaerat iste minima officia assumenda. Officia autem, ipsa
              eligendi totam accusantium aliquam illum corporis quisquam{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-5">
            <FaHeart className="text-[70px] text-firstColor   rounded-full p-3.5 hover:bg-button hover:text-white transition-all ease-in-out duration-500 border-transparent border-4 hover:border-4 hover:border-zinc-200" />
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-base font-bold text-zinc-800 uppercase  ">
              Wedding Reception
            </h3>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              quaerat iste minima officia assumenda. Officia autem, ipsa
              eligendi totam accusantium aliquam illum corporis quisquam{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="my-5">
            <FaWeight className="text-[70px] text-firstColor   rounded-full p-3.5 hover:bg-button hover:text-white transition-all ease-in-out duration-500 border-transparent border-4 hover:border-4 hover:border-zinc-200" />
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-base font-bold text-zinc-800 uppercase  ">
              Gym
            </h3>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              quaerat iste minima officia assumenda. Officia autem, ipsa
              eligendi totam accusantium aliquam illum corporis quisquam{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="my-5">
            <FaPalette className="text-[70px] text-firstColor   rounded-full p-3.5 hover:bg-button hover:text-white transition-all ease-in-out duration-500 border-transparent border-4 hover:border-4 hover:border-zinc-200" />
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-base font-bold text-zinc-800 uppercase ">
              Order and Delivery
            </h3>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              quaerat iste minima officia assumenda. Officia autem, ipsa
              eligendi totam accusantium aliquam illum corporis quisquam{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
