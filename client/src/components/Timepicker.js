import React, { useState } from 'react';


export default function Datepicker() {

    const [orderTime, setOrderTime] = useState("");

    return (
        <div>
            <h5>Time</h5>
            <div className="cell"><span className="label primary"></span>
                <input id="orderTime" placeholder="Select Time" type="time" onChange={(e) => setOrderTime(e.target.value)} />
            </div>

        </div>
    )
}

