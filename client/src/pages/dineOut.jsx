import React, { useState } from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import DetailComponent from "../components/detail";
import IconComponent from "../components/icon";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import TimePicker from "../components/Timepicker";
import MenuItems from "../components/MenuItems";
import Axios from "axios";
import Datepicker from "../components/Datepicker";

const DineOut = () => {

    const [orderName, setOrderName] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [orderTime, setOrderTime] = useState("")
    const [orderItem, setOrderItem] = useState("")
    const [orderTotal, setOrderTotal] = useState("");


    const placeOrder = (e) => {
        e.preventDefault();
        Axios({
            method: "POST",
            url: "/api/dineOut",
            data: {
              Name: orderName,
              Date: orderDate,
              Time: orderTime,
              Order: orderItem,
              Total: orderTotal
            },
            withCredentials: true,
          }).then((res) => console.log(res));
        };


    return (
        <div>
            <NavbarComponent />

            <div>
                <form>
                    <h5>Name</h5>
                    <input
                        placeholder="Name"
                        onChange={(e) => setOrderName(e.target.value)}
                    />
                    <div>
                        <h5>Date</h5>
                        <div className="cell"><span className="label primary"></span>
                            <input id="orderName" placeholder="yyyy-mm-dd" type="Date" onChange={(e) => setOrderDate(e.target.value)} />
                        </div>

                    </div>
                    <div>
                        <h5>Time</h5>
                        <div className="cell"><span className="label primary"></span>
                            <input id="orderTime" placeholder="Select Time" type="time" onChange={(e) => setOrderTime(e.target.value)} />
                        </div>

                    </div>
                    <h5>Order Items</h5>
                    <div className="cell"><span className="label primary"></span>
                        <input id="orderItem" placeholder="Order Items will go here" type="text" onChange={(e) => setOrderItem(e.target.value)} />
                    </div>

                    <h5>Total</h5>
                    <input
                        placeholder="Price total goes here" type="number"
                        onChange={(e) => setOrderTotal(e.target.value)}
                    />
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={placeOrder}> Place Order</button>
                </form>
            </div>
            <FooterComponent />

        </div>
    );

}

export default DineOut;