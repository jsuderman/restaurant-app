import React, { Component } from 'react';
import Reservations from "../Pages/Reservation"

export default class Datepicker extends Component {
    render(props) {
        console.log(props)
        return (
            <div>   
                <Datepicker 
                selected={this.props.selected}
                onChange={this.props.onChange}
                minDate={this.props.minDate}
                maxDate={this.props.maxDate}
                />
            </div>
        )
    }
}
