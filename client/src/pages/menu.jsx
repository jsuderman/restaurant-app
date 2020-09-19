import React from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import DetailComponent from "../components/detail";
import IconComponent from "../components/icon";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import MenuItems from "../components/MenuItems";

const Menu = () => {

    // const [orderName, setOrderName] = useState("");
    // const [orderDate, setOrderDate] = useState("");
    // const [orderTime, setOrderTime] = useState("");
    // const [orderItems, setOrderItems] = useState("");
    // const [orderPrice, setOrderPrice] = useState("");


    // const registerUser = () => {
    //     Axios({
    //       method: "POST",
    //       url: "/api/placeOrder",
    //       data: {
    //         Name: OrderName,
    //         Date: OrderDate,
    //         Time: OrderTime,
    //         Items: OrderItems,
    //         Price: OrderPrice
    //       },
    //       withCredentials: true,
    //     }).then((res) => console.log(res));
    //   };

return(
    <div>
        <NavbarComponent/>
        <div class="row">
          <div class="col s12 m5">
            <div class="card-panel ">
              <table>
                  <tr id="reciept-header">
                      <th>Item</th>
                      <th></th>
                      <th></th>
                      <th>Price</th>
                  </tr>
                  <tr id="menu-space">

                  </tr>
                  <tr id="reciept-footer">
                      <th>Total</th>
                      <th></th>
                      <th></th>
                      <th>Price:</th>
                  </tr>
                  <div>
                    <button className="btn waves-effect waves-light" id="place-order" type="submit" name="action">Place Order</button>
                  </div>
              </table>
            </div>
          </div>
        </div>

        <MenuItems/>
        <FooterComponent/>
    </div>
    );
    
}

export default Menu;