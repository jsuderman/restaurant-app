import React, { useState } from 'react'
import "../app.css";

const MenuItems = () => {

  const [items] = useState([
    {
      name: "Menu Item #1",
      price: "$" + 10.99,
      image: require("../images/Lamb.jpg")
    },
    {
      name: "Menu Item #2",
      price: "$" + 10.99,
      image: require("../images/crab.jpg")
    },
    {
      name: "Menu Item #3",
      price: "$" + 10.99,
      image: require("../images/filletMinion.jpg")
    },
    {
      name: "Menu Item #4",
      price: "$" + 10.99,
      image: require("../images/Pho.jpg")
    },
    {
      name: "Menu Item #5",
      price: "$" + 10.99,
      image: require("../images/food.jpg")
    },
    {
      name: "Menu Item #6",
      price: "$" + 10.99,
      image: require("../images/shrimp.jpg")
    }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {

    let currentCart = JSON.parse(sessionStorage.getItem("currentCart")) || [];
      currentCart.push(item)
      sessionStorage.setItem("currentCart", JSON.stringify(currentCart))
    console.log("Ive been clicked");
    setCart([...cart, item]);
  }

    return (
      <div>
        {items.map((item, index) => 
        (
        <div className="col s12 m7">
          <h5 className="header itemName" name="name">{item.name}</h5>
          <div className="card" key="index">
            <div className="card-image">
              <img className="menuItem" src={item.image} alt="menuItem" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
            </div>
            <div className="card-action price" name="price">
              <h6>{item.price}</h6>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light add-to-cart" type="submit" name="action" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        </div>
        )
)}
      </div>
      
        
    )
}

export default MenuItems;


