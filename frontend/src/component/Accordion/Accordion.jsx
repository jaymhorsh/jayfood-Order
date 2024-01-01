import React, { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="mb-2 w-full">
    <div
      className="bg-gray-800 flex items-center justify-between transition-all ease-in-out duration-[4000] p-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="xs:text-xl text-3xl text-white ">{title} </div>
      <div>
        {isOpen ? (
          <FiMinusCircle className="text-xl  text-white" />
        ) : ( 
          <FiPlusCircle className="text-xl text-white" />
        )}
      </div>
    </div>
    <div className=" w-full h-full ">
       {isOpen && <div className=" text-black transition-all ease-in-out duration-1000 ">{content}</div>}
    </div>
   
  </div>
);

const Accordion = ({ items }) => {
  const [openItems, setOpenItems] = useState(Array(items.length).fill(false)); //To set if all the accordion should open at first load

  const handleItemClick = (id) => {
    const newOpenItems = [...openItems];
    newOpenItems[id] = !newOpenItems[id];
    setOpenItems(newOpenItems);
  };
  return (
    <div>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openItems[item.id]}
          onClick={() => handleItemClick(item.id)}
          className="transition-all ease-in-out duration-[4000] "
        />
      ))}
    </div>
  );
};

export default Accordion;
