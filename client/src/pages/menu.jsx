import React from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/footer";
import MenuItems from "../components/MenuItems";
import Cart from "../components/cart";


const Menu = () => {


  return (
    <div>
      <NavbarComponent />
      
      <Cart/>

      <div>


        <h2>Our Menu</h2>
        <MenuItems/>


      </div>


      <FooterComponent />
    </div>
  );

}

export default Menu;