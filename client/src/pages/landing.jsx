import React, { useState } from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import "../app.css";


const Landing = (props) => {

    console.log(sessionStorage)
    

    return (
        <div>
            <NavbarComponent/>
            <HeaderComponent/>
    <h3>Welcome {sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}</h3>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1 current">
                        <div className="card-content white-text">
                            <span className="card-title">Current Reservation</span>
                            <p>The Last reservation by this user will go here.</p>
                        </div>
                        <div className="card-action">

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1 current">
                        <div className="card-content white-text">
                            <span className="card-title">Current Order</span>
                            <p>The last order placed by this user will go here</p>
                        </div>
                        <div className="card-action">

                        </div>
                    </div>
                </div>
            </div>
            <AboutComponent/>
            <FooterComponent/>
        </div>
    );

}

export default Landing;