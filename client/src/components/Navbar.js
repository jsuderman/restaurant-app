import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../app.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div id="background" className="view">
          <div className="full-lg-img">
            <nav className="nav-extended">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">ReservatioNow</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </div>
              <div className="nav-content">
                <ul className="tabs tabs-transparent">
                  <li className="tab"><Link to="/user">Home</Link></li>
                  <li className="tab"><Link to="/menu">Menu</Link></li>
                  <li className="tab"><Link to="/reservation">Make Reservation</Link></li>
                  <li className="tab"><Link to="/dineOut">Dine-Out</Link></li>
                </ul>
              </div>
            </nav>
          </div>

        </div>


      </div>
    )
  }
}

export default Navbar


