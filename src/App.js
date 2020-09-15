import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../src/Navbar';
import Authentication from "./Pages/Authentication"

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={Authentication} />
    </div>


    </Router>
    
  );
}
export default App;
