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


function Error(props) {

    return (
        <div className="error">
            <NavbarComponent />
            
            <div>
                <form>
                    <h5>404 PAGE NOT FOUND</h5>
                    
                </form>
            </div>
        </div>
    )
}

export default Error