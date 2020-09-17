import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css"

function Reservation() {
    
        const[selectedDate, setSelectedDate] = useState(null)
        
        return (
            <div className="reservation">
                <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                minDate={new Date()}
                maxDate={addDays(new Date(), 14)}
                />
            </div>
        )
}

export default Reservation
