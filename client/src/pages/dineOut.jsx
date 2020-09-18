import React, { useState } from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import DetailComponent from "../components/detail";
import IconComponent from "../components/icon";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import TimePicker from "../components/Timepicker"

const DineOut = () => {

    const [orderName, setOrderName] = useState("");
    const [orderSeating, setOrderSeating] = useState("");
    const [orderGuest, setOrderGuest] = useState("")

return(
    <div>
        <NavbarComponent />
            <HeaderComponent />
            <DetailComponent />
            <IconComponent />
            <AboutComponent />
            <div>
                <form>
                    <h5>Name</h5>
                    <input
                        placeholder="Name"
                        onChange={(e) => setOrderName(e.target.value)}
                    />
                    <TimePicker/>
                    <h5>Order</h5>
                        <input  
                            placeholder="Order items go here"
                            onChange={(e) => setOrderSeating(e.target.value)}
                        />
                    <h5>Total</h5>
                        <input
                            placeholder="Price total goes here" type="number"
                            onChange={(e) => setOrderGuest(e.target.value)}
                        />
                        <button className="btn waves-effect waves-light" type="submit" name="action"> Place Order</button>
                </form>
            </div>
                <FooterComponent />

    </div>
    );
    
}

export default DineOut;