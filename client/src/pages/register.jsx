import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import Axios from "axios";


function Register (){

    const history = useHistory();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerFirstName, setRegisterFirstName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");
    const [registerPhone, setRegisterPhone] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");


    const registerUser = () => {
        Axios({
          method: "POST",
          url: "/api/register",
          data: {
            Email: registerEmail,
            FirstName: registerFirstName,
            LastName: registerLastName,
            Phone: registerPhone,
            Password: registerPassword
          },
          withCredentials: true,
        }).then((res, err) => 
        {
          if(err) 
          {
            console.log(err);
          } else {
            history.push("/");
            console.log(res);
          }

        }) 
      };

      

return(
    <div>
  

            <h2>Register</h2>
            <h5>Email</h5>
            <input 
            placeholder="Enter Email" 
            onChange= {(e) => setRegisterEmail(e.target.value)}
            />

            <h5>First Name</h5>
            <input 
            placeholder="Enter First Name" 
            onChange= {(e) => setRegisterFirstName(e.target.value)}
            />

            <h5>Last Name</h5>
            <input 
            placeholder="Enter Last Name" 
            onChange= {(e) => setRegisterLastName(e.target.value)}
            />

            <h5>Phone</h5>
            <input 
            placeholder="Enter Phone Number (###)###-####" 
            onChange= {(e) => setRegisterPhone(e.target.value)}
            />

            <h5>Password</h5>
            <input 
            placeholder="Enter Password" 
            onChange= {(e) => setRegisterPassword(e.target.value)}
            />

            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={ registerUser }> Submit </button>


            <p>Already have an account? Click <Link to="/">here</Link> to Login.</p>


    </div>
    );
    
}

export default Register;