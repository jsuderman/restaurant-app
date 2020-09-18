import React, { Component } from "react";
import bg from "asset/bg.png";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
export default class HeaderComponent extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  render() {
    return (
      <div className='row'>
        <div className='col s12 m6'>
          <img className='responsive-img' src={bg} />
        </div>
        <div className='col s12 m6'>
          <h4 className='font'>
            <b>Find your</b>
          </h4>
          <h1 className='title purple-text text-darken-4'>
            Next
            <u>
              <span className='teal-text text-accent-3 i-line'>Meal</span>
            </u>{" "}
          </h1>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>

          <p className='para'>
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </div>

        <div>
          <div
            ref={(Modal) => {
              this.Modal = Modal;
            }}
            id='modal1'
            className='modal'
          >

            <div className='modal-footer'>
              <a
                href='#close'
                className='btn btn-header modal-close white-text teal accent-3'
              >
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
