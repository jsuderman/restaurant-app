import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="sass.html">Menu</a></li>
              <li><a href="/home">Home</a></li>
              <li><a href="/reservations">Reservations</a></li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}
{/* <div id="background" class="view">
  <div class="full-lg-img">

  </div> */}

// </div>

export default Navbar


