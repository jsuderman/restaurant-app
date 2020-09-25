import React from "react";
import { Link, Redirect } from "react-router-dom";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

//Storage 

function Login (props) {
if(props.auth === true){
  return <Redirect to="/user/"/>
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
          onChange={props.handleInputChange}
          name="user"
        />

        <h5>Password</h5>
        <input
          placeholder="Enter Password"
          onChange={props.handleInputChange}
          name="password"
        />

        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.loginUser}> Log In </button>

        <p>Don't have an account? Click <Link to="/register">here</Link> to sign up.</p>
      </form>
    </div>
  );

}

export default Login;