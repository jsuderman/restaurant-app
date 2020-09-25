import React, {useState} from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import DetailComponent from "../components/detail";
import IconComponent from "../components/icon";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import MenuItems from "../components/MenuItems";

const Menu = () => {

    

    
  
return(
    <div>
        <NavbarComponent/>
        <div class="row">
          <div class="col s12 m5">
            <div class="card-panel ">
                  <h5>Selected Items</h5>
                  <div>Order Items go here</div>
                  <div>
                    <button className="btn waves-effect waves-light" id="place-order" type="submit" name="action">Place Order</button>
                  </div>
              
            </div>
          </div>
        </div>

        <div>
          {/* {menueItems.map(item => {
            return <ItemComponent item={item} setOrderCardValues={setOrderCardValues}/>
          })} */}

{/* lets say this code is in the item component:
onclik, we will create an object {name: 'the item', value: the value}.. both are available in this.props
setOrderCardValues({}).. which is also available in props */}
        
        <h2>Our Menu</h2>
          <MenuItems />


      </div>

        
        <FooterComponent/>
    </div>
    );
    
}

export default Menu;