import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";


const MealsItem = ({id, name, description, price} ) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const prices = formatter.format(price);
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = (enteredAmount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: enteredAmount,
      price: price,
    });
  };

  return (
    <li>
      <div className={classes.meal}>
        <h3>{name }</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{prices}</div>
        <div>
          <MealItemForm  id={id} onAddToCart={onAddToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default MealsItem;
