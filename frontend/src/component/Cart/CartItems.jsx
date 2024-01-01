import React from "react";
import Formater from "../../utils/Formater";
import { FaPlusSquare, FaMinusSquare, FaTrash } from "react-icons/fa";

const CartItems = ({ item, onIncrease,onDecrease, onRemove }) => {
  return (
    <li key={item.id} className="flex py-6 mr-0 md:mr-2">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={`https://jayfood-order.vercel.app/images/${item.image}`}
          alt={item.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.name}</h3>
            <p className="ml-4">{Formater.format(item.price)}</p>
          </div>
        
        <div className="flex flex-1 items-end  justify-between text-sm">
          <div>
            <p>Qty: <span className="text-teal-600">{item.quantity}</span></p>
          </div>
          <div>
              <div className="flex gap-2">
                <button>
                  <FaPlusSquare className="text-2xl text-gray-500" onClick={onIncrease}/>
                </button>
                <button>
                  <FaMinusSquare className="text-2xl text-gray-500" onClick={onDecrease} />
                </button>
              </div>       
          </div>
          <div className="flex">
            <button
              type="button"
              className="text-lg text-gray-700 hover:text-black transition-colors ease-in duration-100"
              onClick={onRemove}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
