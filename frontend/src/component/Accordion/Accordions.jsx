import React from "react";
import Accordion from "./Accordion";
import {Drinks,Appetizer, Salads,LocalDishes, Continental, Sandwish, Pizza, SeaFoods, Others} from "../Meals/Meals";
// import 
 const accordionItems = [
    { id: 1, title: "Appetizers/Breakfast", content: <Appetizer/>},
    { id: 2, title: "Sandwiches and Wraps ", content:<Sandwish/> },
    { id: 3, title: "Local Dishes", content:<LocalDishes/>},
    { id: 4, title: "Continental Dishes", content:<Continental/>},
    { id: 5, title: "Pizza", content:<Pizza/>},
    { id: 6, title: "SeaFoods and Grills  ", content:<SeaFoods/>},
    { id: 7, title: "Drinks & Beverages", content:<Drinks/>},
    { id: 8, title: "Salads", content:<Salads/>},
    { id: 9, title: "Others", content:<Others/>},
    
  ];
const Accordions = () => {
  return <Accordion items={accordionItems} />;
};

export default Accordions;
