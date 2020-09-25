import React from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import DetailComponent from "../components/detail";
import IconComponent from "../components/icon";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import "../app.css"


const Landing = () => {

    return (
        <div>
            <NavbarComponent/>
            <HeaderComponent/>
            <h3>Welcome User</h3>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1 current">
                        <div class="card-content white-text">
                            <span class="card-title">Current Reservation</span>
                            <p>The Last reservation by this user will go here.</p>
                        </div>
                        <div class="card-action">

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1 current">
                        <div class="card-content white-text">
                            <span class="card-title">Current Order</span>
                            <p>The last order placed by this user will go here</p>
                        </div>
                        <div class="card-action">

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