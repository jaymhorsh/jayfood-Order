import React from "react";
import Formater from "../../utils/Formater";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const MealItems = ({meal}) => {
  const cartCtx = useContext(CartContext)

  const handleAddMealToCart = ()=>{
      cartCtx.addItem(meal)
  }
  return (
    <article
      className="group relative cursor-pointer py-6 px-6 rounded-lg  shadow-md  bg-slate-50"
    >
      <div className="relative group-hover:opacity-90">
        <div className="aspect-h-1 aspect-w-1 w-full h-[16rem] rounded-md overflow-hidden    lg:aspect-none  ">
          <img
            src={`https://jayfood-order.vercel.app/images/${meal.image}`}
            alt={meal.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="absolute w-full h-[9rem] p-2 right-0 left-0  bottom-0 flex items-end ">
          <div className="bg-gradient-to-br from-slate-400 to-slate-800 left-0 w-full h-10  overflow-hidden rounded-b-md bottom-0 absolute opacity-50"></div>
          <div className=" flex w-full  justify-end relative">
            <span className="text-lg text-white font-semibold bottom-5">
              {Formater.format(meal.price)}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            {meal.name}
          </h2>
        </div>
        <div>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {meal.description}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <span className="btn"  onClick={handleAddMealToCart}>
          Add to Cart
        </span>
      </div>
    </article>
  );
};

export default MealItems;
