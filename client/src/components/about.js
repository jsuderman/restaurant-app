import React from "react";
import One from "../images/one.png";
import Two from "../images/two.png";
import Three from "../images/three.png";
import Four from "../images/four.png";

export default function AboutComponent() {
  return (
    <div className='about hide-on-small-only'>
      <div className='row'>
        <h4 className='font'>
          <b>Design Your Night Out</b>
        </h4>
        <div className='col s12 m3'>
          <img className='responsive-img' src={One} alt='bg' width='150px' />
          <h5 className='font'>Explore</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
            
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Two} alt='bg' width='150px' />
          <h5 className='font'>Find the best time</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
          
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Three} alt='bg' width='150px' />
          <h5 className='font'>Dine in or Dine out?</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
          
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Four} alt='bg' width='150px' />
          <h5 className='font'>ReserveNow</h5>
          <p className='para'>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour.
          </p>
          <h6>
          
          </h6>
        </div>
      </div>
    </div>
  );
}
