import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import Cart from "./component/Cart/Cart";
import { CartContextProvider } from "./store/CartContext";
import Checkout from "./pages/Checkout";
const App = () => {
  return (
    <div>
      <Router>
        <CartContextProvider>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartContextProvider>
      </Router>
    </div>
  );
};

export default App;
