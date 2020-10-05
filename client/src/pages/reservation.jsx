import React, { useState } from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/footer";
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
                    <select className="browser-default" onChange={(e) => setReserveSeating(e.target.value)}>
                        <option value="" disabled selected>Choose your prefered seating</option>
                        <option value="Bar">Bar</option>
                        <option value="Table">Table</option>
                        <option value="Booth">Booth</option>
                        <option value="Room">Room</option>
                    </select>

                    <h5>Occupants</h5>
                    <div>
                        <input
                            placeholder="How many in the party?" type="number" onChange={(e) => setReserveOccupants(e.target.value)}
                        />
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={placeReservation}> Place Order</button>
                    </div>

                </form>
            </div>
            <FooterComponent />

        </div>
    )
}

export default Reservation