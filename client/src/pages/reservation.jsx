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
import Axios from "axios"


const Reservation = () => {

    const [reserveName, setReserveName] = useState("");
    const [reserveDate, setReserveDate] = useState("");
    const [reserveTime, setReserveTime] = useState("");
    const [reserveSeating, setReserveSeating] = useState("");
    const [reserveOccupants, setReserveOccupants] = useState("");


    const placeReservation = (e) => {
        e.preventDefault();
        Axios({
            method: "POST",
            url: "/api/reservation",
            data: {
              Name: reserveName,
              Date: reserveDate,
              Time: reserveTime,
              Seating: reserveSeating,
              Occupants: reserveOccupants
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
                        onChange={(e) => setReserveName(e.target.value)}
                    />
                    <div>
                        <h5>Date</h5>
                        <div className="cell"><span className="label primary"></span>
                            <input id="orderName" placeholder="yyyy-mm-dd" type="Date" onChange={(e) => setReserveDate(e.target.value)} />
                        </div>

                    </div>
                    <div>
                        <h5>Time</h5>
                        <div className="cell"><span className="label primary"></span>
                            <input id="orderTime" placeholder="Select Time" type="time" onChange={(e) => setReserveTime(e.target.value)} />
                        </div>

                    </div>
                    <h5>Seating</h5>
                    <div className="cell"><span className="label primary"></span>
                        <input id="orderItem" placeholder="Prefered Seating" type="text" onChange={(e) => setReserveSeating(e.target.value)} />
                    </div>

                    <h5>Occupants</h5>
                    <input
                        placeholder="How many in the party?" type="number"onChange={(e) => setReserveOccupants(e.target.value)}
                    />
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={placeReservation}> Place Order</button>
                </form>
            </div>
            <FooterComponent />

        </div>
    )
}

export default Reservation