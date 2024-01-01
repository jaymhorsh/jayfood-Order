import React from "react";
import { Header, Footer } from "../component";
import Accordions from "../component/Accordion/Accordions";

const MenuPage = () => {
  return (
    <>
      <Header/>
      <div className="top-[70px] relative h-full">
        <div className="bg-my-image bg-cover w-full h-full ">
          <div className="flex inset-0 flex-col w-full h-full  items-center backdrop-blur-md backdrop-brightness-50  text-white">
            <div className="md:px-6 py-8 xs:px-3 px-5 text-justify w-full m-auto">
              <Accordions />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
