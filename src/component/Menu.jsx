import React from "react";
import parallax from "../Assets/parallax.jpg";
import about from "../Assets/about.jpg";
import menuImg from "../Assets/menu.jpg";
import MenuList, { menuData } from "../data/menuData";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the shopping cart page
    navigate("/menu");
  };

  return (
    <>
      <div
        className="bg-fixed bg-cover  z-50"
        style={{ backgroundImage: `url(${parallax})` }}
        
      >
        <div className=" bg-opacity-75 flex justify-center ">
          <div className="w-full  xs:h-[600px] ">
            <div className="w-full h-full md:py-12 py-4 px-3 ">
              <div className="flex h-full  items-center w-full md-w-[70%] lg:w-[70%]  m-auto flex-wrap bg-white">
                <div className="md:w-1/2 flex items-center sm: sm:justify-center flex-col text-justify  h-full">
                  <div className=" px-6 xs:my-10 sm:mt-16 sm:mb-24">
                    <h1 className="text-center md:text-6xl xs:text-6xl pb-5">
                      Our Menu
                    </h1>
                    <h3>
                      {" "}
                      Take a glance at list of our nourishable foods from our
                      Catelogue{" "}
                    </h3>
                    <p className="pb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel delectus culpa rerum in explicabo sed voluptas quos
                      dicta repellat officiis illum iusto aperiam, perspiciatis
                      enim placeat dolor aliquid provident dolorem!
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem sequi ipsum error autem ducimus harum dolor
                      nobis! Ad labore quo sit nemo dolorum perferendis eum?
                      Tempora dicta optio neque sint!
                    </p>
                    <div className="flex justify-center  text-center">
                      <button className=" buttonp xs:mt-8 mt-12  self-center " onClick={handleClick}>
                        <span className="z-10"> View Our Menu</span>
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
      {/*  */}
      <div
        className="bg-fixed bg-cover z-50"
        style={{ backgroundImage: `url(${menuImg})` }}
        id="menu"
      >
        <div className="h-full bg-opacity-75 flex justify-center ">
          <div className="w-full  ">
            <div className="w-full h-full xs:py-8 md:py-12 px-2 xs:px-5">
              <div className="w-full h-full  md:w-[60%] lg:w-[50%] py-8 m-auto flex-wrap bg-white">
                <h2 className=" xs:text-xl sm:text-2xl md:text-3xl uppercase text-center font-bold py-8">
                  Our special package
                </h2>
                <div>
                  {menuData.map((menu) => (
                    <MenuList
                      key={menu.id}
                      description={menu.description}
                      title={menu.title}
                      price={menu.price}
                      imgSrc={menu.imgSrc}
                    />
                  ))}
                </div>
                <div className="flex justify-center  text-center">
                  <button className="buttonp my-6 text-center cursor-pointer" onClick={handleClick}>
                    <span className="z-10 ">View more menu</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
