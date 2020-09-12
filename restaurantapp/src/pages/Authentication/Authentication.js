import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import "./style.css";
import Axios from "axios";
// import { render } from 'react-dom';

function Authentication() {
    const [user, setUser] = useState({
        email:"", 
        password:""
    });
    const [newUser, setNewUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        
        setNewUser({[event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newSignUp = {
            email: newUser.email,
            password: newUser.password,
        };

        setUser([...newUser, newSignUp]);

        setUser([...user, newSignUp]);
        // Axios.post({
        //     url: "",
        //     method: "POST",
        //     data: {
        //         email,
        //         password
        //     }
        // })

    };




    return (
        <div>
            <h1>sign up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input onChange={handleChange} type="text" name="email" value={newUser.email}  />
                <label>Password:</label>
                <input onChange={handleChange} type="text" name="password" value={newUser.password}  />
            </form>
            <button type="submit">sign up</button>
        </div>


    )




}

export default Authentication;


