import React from 'react'
import photo from "../Assets/background.jpg";
import {Header, About, Services, Menu, Footer, Home } from "../component";
const HomePage = () => {
  return (
    <>
    <Header textColor={'white'} showCart={'hidden'}/>
    <Home img={photo}/>
    <About/>
    <Services/>
    <Menu/>
    <Footer/>
    </>
  )
}

export default HomePage