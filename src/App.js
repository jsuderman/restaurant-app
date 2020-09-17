<<<<<<< HEAD
import React from "react";
import NavbarComponent from "./Components/navbar";
import HeaderComponent from "./Components/header";
import DetailComponent from "./Components/detail";
import IconComponent from "./Components/icon";
import AboutComponent from "./Components/about";
import FooterComponent from "./Components/footer";

function App() {
  return (
    <div className='App'>
=======
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../src/Navbar';
import Authentication from "./Components/Authentication/Authentication";
import Reservations from "./Components/Pages/Reservation"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Authentication} />
        <Route exact path="/reservations" component={Reservations} />

      </div>
      <div className='App'>
>>>>>>> master
      <NavbarComponent />
      <HeaderComponent />
      <DetailComponent />
      <IconComponent />
      <AboutComponent />
      <FooterComponent />
    </div>

    </Router>

  );
}

export default App;


