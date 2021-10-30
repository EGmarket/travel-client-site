import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container mt-5 bg-info">
        <div className="row">
          <div className="col-md-4 ">
            <h1>EG TRAVEL</h1>
            <h5 className="mx-5">Home: 20/1 Borobag,Mirpur-2</h5>
          </div>
          <div className="col-md-4 mt-5 text-center fs-3 ">
            <NavLink to="/services" className="nav-route foo-logo">
              Services
            </NavLink>
            <NavLink to="/booking" className="nav-route">
              Booking
            </NavLink>
            <NavLink to="/teams" className="nav-route">
              Team
            </NavLink>
          </div>
          <div className="col-md-4 mt-4 text-center">
            <img className="img-fluid " src="https://i.imgur.com/05ZUI6h.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
