import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css"
import TableTotal from "../TableTotal/TableTotal";
import TableType from "../TableType/TableType";

function Reservation(props) {

    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div className="reservation">
            <div>
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 14)}
                    showTimeSelect
                />
            </div>

            <div>
                <TableTotal />
            </div>
            <div>
                <TableType />
            </div>


        </div>
    )
}

export default Reservation



