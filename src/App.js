import {useState } from "react";
import React from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCart = () => {
    setCartIsShown(true);
  };
  const hideShowCart = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCart} />
      <main>
        <Meals />
        {cartIsShown && <Cart onClose={hideShowCart} />}
      </main>
    </CartProvider>
  );
}

export default App;
