import React from "react";
import about from "../Assets/about.jpg";

const About = () => {
  return (
    <div
      className="bg-fixed bg-cover  z-50"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className=" bg-opacity-75 flex justify-center " id='about'>
        <div className="w-full  xs:h-[600px] " >
          <div className="w-full h-full md:py-12 py-4 px-3 ">
            <div className="flex h-full  items-center w-full md-w-[70%] lg:w-[70%]  m-auto flex-wrap bg-white">
              <div className="md:w-1/2 flex items-center sm: sm:justify-center flex-col text-justify  h-full">
                <div className=" px-6 xs:my-10 sm:mt-16 sm:mb-24">
                  <h1 className="text-center md:text-6xl xs:text-6xl pb-5">
                    About Us{" "}
                  </h1>
                  <h3> Know some basic fact about us </h3>
                  <p className="pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    delectus culpa rerum in explicabo sed voluptas quos dicta
                    repellat officiis illum iusto aperiam, perspiciatis enim
                    placeat dolor aliquid provident dolorem!
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem sequi ipsum error autem ducimus harum dolor
                    nobis! Ad labore quo sit nemo dolorum perferendis eum?
                    Tempora dicta optio neque sint!
                  </p>
                  <div className="flex justify-center  text-center">
                    <button className="buttonp mt-12  self-center ">
                      <span className="z-10">About Us</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex md:w-1/2 h-full xs:hidden">
                <img src={about} alt="" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
