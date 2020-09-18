import React, { Component } from 'react'


class MenuItems extends Component {
  render() {
    return (
      <div>
        <h2>Our Menu</h2>
        <div className="col s12 m7">
          <h5 className="header">Horizontal Card</h5>
          <div className="card horizontal">
            <div className="card-image">
              <img src={require("../images/Lamb.jpg")} alt="menuItem"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <button>add to cart</button>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Horizontal Card</h5>
          <div className="card horizontal">
            <div className="card-image">
              <img src={require("../images/crab.jpg")} alt="menuItem"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <button>add to cart</button>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Horizontal Card</h5>
          <div className="card horizontal">
            <div className="card-image">
              <img src={require("../images/filletMinion.jpg")} alt="menuItem"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <button>add to cart</button>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Horizontal Card</h5>
          <div className="card horizontal">
            <div className="card-image">
              <img src={require("../images/Pho.jpg")} alt="menuItem"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <button>add to cart</button>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Horizontal Card</h5>
          <div className="card horizontal">
            <div className="card-image">
              <img src={require("../images/food.jpg")} alt="menuItem"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <button>add to cart</button>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Horizontal Card</h5>
          <div className="card horizontal">
            <div className="card-image">
              <img src={require("../images/shrimp.jpg")} alt="menuItem"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <button>add to cart</button>
          </div>
        </div>






      </div>
    )
  }
}

export default MenuItems;


