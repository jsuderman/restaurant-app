import React,  { useState } from 'react';
import PrivateRoute from './PrivateRoute';



//React Router Imports
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

//Pages
import Login from "./pages/login";
import Landing from "./pages/landing";
import Reservation from "./pages/reservation";
import DineOut from "./pages/dineOut";
import Register from "./pages/register";
import Menu from "./pages/menu";
import Error from "./pages/404";




function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null)


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Login  auth={authenticated} setAuthenticated={setAuthenticated} setUser={setUser} user={user}/>
          </Route>
          <Route exact path="/register" component={Register}/>
          <PrivateRoute exact path="/user" component={Landing} setUser={setUser} user={user}/>
          <PrivateRoute exact path="/menu" component={Menu}/>
          <PrivateRoute exact path="/reservation" component={Reservation}/>
          <PrivateRoute exact path="/dineOut" component={DineOut}/>
          <Route path = "*" component = {Error}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

