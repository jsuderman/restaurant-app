import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <div>
        <div id="background" className="view">
          <div className="full-lg-img">
            <nav>
              <div className="nav-wrapper">
                <Link to="/user" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/Reservation">Dine-In</Link></li>
                  <li><Link to="/dineOut">Dine-Out</Link></li>
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


