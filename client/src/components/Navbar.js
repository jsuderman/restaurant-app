import React from 'react';
import { Link, useHistory } from "react-router-dom";
import "../app.css";

const Navbar = () => {

  const history = useHistory();
  
  function logoutUser() {
    sessionStorage.clear();
    history.push("/");
    }

    return (
      <div>
        <div id="background" className="view">
          <div className="full-lg-img">
            <nav className="nav-extended purple darken-4 ">
              <div className="nav-wrapper">
                <a className="brand-logo">ReservatioNow</a>
                <a href="/" className="waves-effect waves-light btn z-depth-3" id="logOut" onClick={ logoutUser }>LogOut</a>
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


export default Navbar


