import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

import Axios from "axios";

//Storage 

function Login (props) {

  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

    const loginUser = (e) => {
      e.preventDefault()
    
      Axios({
      method: "POST",
      data: {
        Email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/login",
    }).then((res) => {
      if(res.data) {
        sessionStorage.setItem("loggedIn", true);
        sessionStorage.setItem("email", res.data.email);
        sessionStorage.setItem("firstName", res.data.firstName);
        sessionStorage.setItem("lastName", res.data.lastName);
        sessionStorage.setItem("auth", "true");
        props.setAuthenticated(true);
        history.push("/user");
      }
    });
    }

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
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1>ReservatioNow</h1>
        </div>
      </div>

      <h2>Login</h2>

      <form>
        <h5>Email</h5>
        <input
          placeholder="Enter Email"
          onChange={handleInputChange}
          name="user"
        />

        <h5>Password</h5>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handleInputChange}
          name="password"
        />

        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={loginUser}> Log In </button>

        <p>Don't have an account? Click <Link to="/register">here</Link> to sign up.</p>
      </form>
    </div>
  );

}

export default Login;