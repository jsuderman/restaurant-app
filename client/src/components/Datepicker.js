import React, { useState } from 'react';


export default function Datepicker() {

    const [orderDate, setOrderDate] = useState("");

    return (
        <div>
            <h5>Date</h5>
            <div className="cell"><span className="label primary"></span>
                <input id="orderName" placeholder="yyyy-mm-dd" type="Date" onChange={(e) => setOrderDate(e.target.value)} />
            </div>

        </div>
    )
}

