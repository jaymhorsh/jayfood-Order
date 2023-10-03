import { useContext } from "react";
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCart.module.css'
import CartContext from "../../store/cart-context";


const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext)
  // convert the array into single value
  // recieves 2 argument/parameters (callback-function and starting/initial value )
  let numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.count}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCart;
