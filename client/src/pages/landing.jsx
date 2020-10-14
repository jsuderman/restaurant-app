import React from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import "../app.css";



const Landing = () => {


    return (
        <div>
            <NavbarComponent />
            <HeaderComponent />
            <h3>Welcome {sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}</h3>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card purple darken-4 current z-depth-5">
                        <div className="card-content white-text">
                            <span className="card-title">Current Reservation</span>
                            <h5 className="card-headers">Name: {sessionStorage.getItem("reserveName")}</h5>
                            <h5 className="card-headers">Date: {sessionStorage.getItem("reserveDate")}</h5>
                            <h5 className="card-headers">Time: {sessionStorage.getItem("reserveTime")}</h5>
                            <h5 className="card-headers">Seating: {sessionStorage.getItem("reserveSeating")}</h5>
                            <h5 className="card-headers">Occupants: {sessionStorage.getItem("reserveOccupants")}</h5>
                        </div>
                        <div className="card-action">

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6">
                    <div className="card purple darken-4 current z-depth-5">
                        <div className="card-content white-text">
                            <span className="card-title">Current Order</span>
                            <h5 className="card-headers">Name: {sessionStorage.getItem("name")}</h5>
                            <h5 className="card-headers">Date: {sessionStorage.getItem("date")}</h5>
                            <h5 className="card-headers">Time: {sessionStorage.getItem("time")}</h5>
                            <h5 className="card-headers">Order: {sessionStorage.getItem("order")}</h5>
                            <h5 className="card-headers">Order: {sessionStorage.getItem("order")}</h5>
                            <h5 className="card-headers">Total: {sessionStorage.getItem("total")}</h5>
                        </div>
                        <div className="card-action">

                        </div>
                    </div>
                </div>
            </div>
            <AboutComponent />
            <FooterComponent />
        </div>
    );

}

export default Landing;