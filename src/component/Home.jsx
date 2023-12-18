import React from "react";


const Home = ({img}) => {
  return (
    <div className="w-full h-screen " id="hero">
      <div className=" w-full h-full bg-gray-900/20 absolute z-[-1]">
        <img
          src={img}
          alt="rest"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className=" flex items-center justify-center flex-col h-screen md:w-[700px] m-auto">
        <div className="text-white text-center">
          <h1 className=" text-center text-8xl pb-5">Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            fugit reprehenderit
          </p>
          <p className="py-2">Modern restuarant and Lounge </p>
        </div>
        <button className=" buttonp my-6 border-white  text-white">
          {" "}
          <span className="z-10">Explore</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
