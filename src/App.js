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
