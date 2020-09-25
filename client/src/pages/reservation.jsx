import React, { useState } from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import DetailComponent from "../components/detail";
import IconComponent from "../components/icon";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import DatePicker from "../components/Datepicker";
import TimePicker from "../components/Timepicker"
import { addDays } from "date-fns";
// import TableTotal from "../components/TableTotal";
// import TableType from "../components/TableType";


function Reservation(props) {

    const [reserveName, setReserveName] = useState("");
    const [reserveSeating, setReserveSeating] = useState("");
    const [reserveGuest, setReserveGuest] = useState("")


    return (
        <div className="reservation">
            <NavbarComponent />
            
            <div>
                <form>
                    <h5>Name</h5>
                    <input
                        placeholder="Name"
                        onChange={(e) => setReserveName(e.target.value)}
                    />
                        <DatePicker />
                        <TimePicker/>
                    <h5>Seating</h5>
                        <input  
                            placeholder="Select your seating preference"
                            onChange={(e) => setReserveSeating(e.target.value)}
                        />
                    <h5>Occupants</h5>
                        <input
                            placeholder="How many guest" type="number"
                            onChange={(e) => setReserveGuest(e.target.value)}
                        />
                        <button className="btn waves-effect waves-light" type="submit" name="action"> Set Reservation</button>
                </form>
            </div>
            
            <FooterComponent/>
                

            </div>
    )
}

export default Reservation