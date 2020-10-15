import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/footer";
import { Link, useHistory } from "react-router-dom";
import { toast } from "materialize-css";
import Axios from "axios";


const DineOut = () => {

    const history = useHistory();
    const [orderName, setOrderName] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [orderTime, setOrderTime] = useState("");
    const [orderItem, setOrderItem] = useState("");
    const [orderTotal, setOrderTotal] = useState("");
    const [displayOrder, setDisplayOrder] = useState("");

    let orders = JSON.parse(sessionStorage.getItem("currentCart")) || [];


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
        }).then((res) => {

            console.log(res);

            sessionStorage.setItem("name", res.data.Name);
            sessionStorage.setItem("date", res.data.Date);
            sessionStorage.setItem("time", res.data.Time);
            sessionStorage.setItem("order", res.data.Order);
            sessionStorage.setItem("total", res.data.Total);

            toast({ html: "Order Placed", classes: "green lighten-2" });
            history.push("/confirmation");
            console.log(res);
        })
    };

    useEffect(() => {

        let displayOrder = "";
        let total = 0;

        for (let i = 0; i < orders.length; i++) {
            total += parseFloat(orders[i].price.substring(1))
            displayOrder += orders[i].name + " " + orders[i].price + " "
        }

        setDisplayOrder(displayOrder);
        setOrderItem(displayOrder);
        setOrderTotal(total);

    })

    function removeOrders() {
        sessionStorage.removeItem("currentCart");
        setDisplayOrder();
    }

    return (
        <div>
            <NavbarComponent />

            <div>
                <form>
                    <h5>Name</h5>
                    <input
                        placeholder={sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}
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
                            <p><Link to="/menu">See Menu</Link></p>

                    <button class='dropdown-trigger btn' onClick={removeOrders} >Remove Orders</button>

                    <div className="cell"><span className="label primary"></span>
                        <input id="orderItem" placeholder="Order Items will go here" type="text" onChange={(e) => setOrderItem(e.target.value)} value={displayOrder} />

                    </div>

                    <h5>Total</h5>
                    <input
                        placeholder="Price total goes here" type="number"
                        onChange={(e) => setOrderTotal(e.target.value)}
                        value={orderTotal}
                    />
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={placeOrder}> Place Order</button>
                </form>
            </div>
            <FooterComponent />

        </div>
    );

}

export default DineOut;