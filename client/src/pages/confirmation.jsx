import React from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/footer";

const Confirmation = () => {


  return (
    <div>
      <NavbarComponent />

      <div>


        <h2>Your Confirmation</h2>
        <h5>Name: {sessionStorage.getItem("name")}</h5>
        <h5>Date: {sessionStorage.getItem("date")}</h5>
        <h5>Time: {sessionStorage.getItem("time")}</h5>
        <h5>Order: {sessionStorage.getItem("order")}</h5>
        <h5>Total: {sessionStorage.getItem("total")}</h5>


      </div>


      <FooterComponent />
    </div>
  );

}

export default Confirmation;