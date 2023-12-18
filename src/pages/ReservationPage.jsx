import React from "react";
import { Header, Footer, Reservation } from "../component";


const ReservationPage = () => {
  return (
    <>
      <Header  showCart={'hidden'}/>
      <Reservation/>
      <Footer />
    </>
  );
};

export default ReservationPage;
