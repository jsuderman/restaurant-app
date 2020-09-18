import React from "react";
import NavbarComponent from "./Components/Pages/navbar";
import HeaderComponent from "./Components/Pages/header";
import DetailComponent from "./Components/Pages/detail";
import IconComponent from "./Components/Pages/icon";
import AboutComponent from "./Components/Pages/about";
import FooterComponent from "./Components/Pages/footer";
import Authentication from "./Components/Authentication/Authentication";
import Reservations from "./Components/Pages/Reservation";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

      <div className='App'>
      <NavbarComponent />
      <HeaderComponent />
      <DetailComponent />
      <IconComponent />
      <AboutComponent />
      <FooterComponent />
    </div>

  );
}

export default App;


