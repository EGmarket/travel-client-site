import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container mt-5 bg-dark">
        <div className="row">
          <div className="col-md-4 ">
            <img  height="150px" className="mt-5 mx-5 shadow" src="https://i.imgur.com/AIU5xtS.png" alt="" srcset="" />
            <h5 className="mx-5 text-white">Home: 20/1 Borobag,Mirpur-2</h5>
            <h5 className="mx-5 text-white">Mobile: 01319917359</h5>
          </div>
          <div className="col-md-4 mt-5 text-center fs-3 ">
            <NavLink to="/" className="nav-route foo-logo text-white">
              Home
            </NavLink>
            <NavLink to="/offers" className="nav-route foo-logo text-white">
              Offer
            </NavLink>
            <NavLink to="/populartours" className="nav-route text-white">
              Popular
            </NavLink>
            <NavLink to="/honeytours" className="nav-route text-white">
              Honey
            </NavLink>
            <NavLink to="/toptours" className="nav-route text-white">
              Tops
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
