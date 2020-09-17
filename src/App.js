import React from "react";
import NavbarComponent from "./Components/navbar";
import HeaderComponent from "./Components/header";
import DetailComponent from "./Components/detail";
import IconComponent from "./Components/icon";
import AboutComponent from "./Components/about";
import FooterComponent from "./Components/footer";

function App() {

  // <Router>
  // <div className="App">
  //   <Navbar />
  //   <Route exact path="/" component={Authentication} />
  //   <Route exact path="/reservations" component={Reservations} /></div>
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


