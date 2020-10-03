import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import Axios from "axios";
import authService from "./authService";
// import Navbar from "./Navbar";


const PrivateRoute = ({ component: Component, ...rest}) => (

    < Route {...rest}
    render={(props) => {
        return authService.isAuthenticated() ? <Component /> : < Redirect to="/" />;
    }}
    />
)

export default PrivateRoute;