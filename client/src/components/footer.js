import React from "react";
import Left from "../images/left-img.png";
import Right from "../images/right-img.png";

export default function FooterComponent() {
  return (
    <footer className='page-footer grey lighten-2'>
      <div className='row'>
        <div className="row s12 center">
          <h3 className='center title black-text'>
            Reservatio<u>N</u>ow
          </h3>
        </div>



        {/* <h6 className='font center black-text'>
          <b>Input Your Information Bellow</b>
        </h6> */}


        <div className='row'>
          <div className='col m4 s2'>
            <img className='responsive-img' src={Left} alt='bg' />
          </div>
          <div className='col m4 s8'>
            <p className='para center black-text'>
              If you want to stay up to date
              Subcribe to our newsletter down below
        </p>

            <div className='card-panel'>
              <div className='card-content'>
                <div className='input-field one'>
                  <input id='user_name' type='text' className='validate' />
                  <label htmlFor='user_name'>Username</label>
                </div>
                <div className='input-field'>
                  <input id='last_name' type='text' className='validate' />
                  <label htmlFor='last_name'>Email ID</label>
                </div>
              </div>
              <div className='card-action'>
                <a
                  href='#subscribe'
                  className='btn btn-header white-text text-darken-4 teal accent-3'
                >
                  {" "}
                Subscribe To Newsletter
              </a>
              </div>
            </div>
          </div>
          <div className='col m4 s2'>
            <img className='responsive-img' src={Right} alt='bg' />
          </div>
        </div>

      </div>
      <div className='footer-copyright purple darken-4'>
        <div className='container'>

          <a className='grey-text text-lighten-4 right' href='#!'>

          </a>
        </div>
      </div>
    </footer>
  );
}
