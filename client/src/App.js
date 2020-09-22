import React,  { useState, useEffect } from 'react';

import Axios from "axios";



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

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

 
 useEffect(()=>{
   if(sessionStorage.getItem("loggedIn")===true){
     setAuthenticated(true)
   }
 },[authenticated])
 
   const loginUser = (e) => {
     e.preventDefault()
     console.log("login user clicked")
     let data= {
       Email: loginEmail,
       password: loginPassword
     }
     Axios.post("/api/login",data)
     .then((res) => {
       console.log(res)
       if(res.status === 200) {
         sessionStorage.setItem("loggedIn", true);
         sessionStorage.setItem("id", res.data.id);
         setAuthenticated(true);
       }
     });
   };


   function handleInputChange(e){
let name = e.target.name;
let value = e.target.value

switch (name){
    case "user":
    setLoginEmail(value)
    break;
    case"password":
    setLoginPassword(value)
    break;
}


   }


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Login handleInputChange={handleInputChange} auth={authenticated} loginUser={loginUser} />
          </Route>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/user" component={Landing}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/reservation" component={Reservation}/>
          <Route exact path="/dineOut" component={DineOut}/>
          <Route path = "*" component = {Error}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

