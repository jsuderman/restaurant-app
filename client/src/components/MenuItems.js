import React, { Component } from 'react'
import "../app.css";

class MenuItems extends Component {
  render() {
    return (
      <div>


        <h2>Our Menu</h2>
        <div className="col s12 m7">
          <h5 className="header">Menu Item #1</h5>
          <div className="card">
            <div className="card-image">
              <img className="menuItem" src={require("../images/Lamb.jpg")} alt="menuItem" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <div className="card-action price" name="price">
              <h6>$10.00</h6>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" id="place-order" type="submit" name="action">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Menu Item #2</h5>
          <div className="card">
            <div className="card-image">
              <img className="menuItem" src={require("../images/crab.jpg")} alt="menuItem" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <div className="card-action price" name="price">
              <h6>$10.00</h6>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" id="place-order" type="submit" name="action">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Menu Item #3</h5>
          <div className="card">
            <div className="card-image">
              <img className="menuItem" src={require("../images/filletMinion.jpg")} alt="menuItem" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <div className="card-action price" name="price">
              <h6>$10.00</h6>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" id="place-order" type="submit" name="action">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Menu Item #4</h5>
          <div className="card">
            <div className="card-image">
              <img className="menuItem" src={require("../images/Pho.jpg")} alt="menuItem" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <div className="card-action price" name="price">
              <h6>$10.00</h6>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" id="place-order" type="submit" name="action">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Menu Item #5</h5>
          <div className="card">
            <div className="card-image">
              <img className="menuItem" src={require("../images/food.jpg")} alt="menuItem" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <div className="card-action price" name="price">
              <h6>$10.00</h6>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" id="place-order" type="submit" name="action">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <h5 className="header">Menu Item #6</h5>
          <div className="card">
            <div className="card-image">
              <img className="menuItem" src={require("../images/shrimp.jpg")} alt="menuItem" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <div className="card-action price" name="price">
              <h6>$10.00</h6>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" id="place-order" type="submit" name="action">Add to Cart</button>
            </div>
          </div>
        </div>



      </div>
    )
  }
}

export default MenuItems;


