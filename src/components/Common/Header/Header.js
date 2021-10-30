import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Container, Navbar } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav-container">
      <Navbar className="container">
        <Container>
          <Link to="/">
            <img
              height="80px"
              className="mx-5 nav-item"
              src="https://i.imgur.com/AIU5xtS.png"
              alt=""
              srcset=""
            />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end nav-item">
            <div>
              <NavLink to="/offers" className="nav-route">
                Offers
              </NavLink>

              <NavLink to="/populartours" className="nav-route">
                Popular Tours
              </NavLink>
              <NavLink to="/honeytours" className="nav-route">
                Honey Tours
              </NavLink>
            </div>

            <NavLink to="/login" className="nav-route">
              {!user?.email && <h2>Login</h2>}
            </NavLink>
            <Navbar.Text>
              {user?.email && (
                <span className="mx-2">
                  Hello, {user.displayName || user.email}{" "}
                </span>
              )}
              {user?.email && (
                <div>
                  <button className="btn btn-danger mb-2 shadow" onClick={logout}>
                    Logout
                  </button>

                  <NavLink to="/orders" className="nav-route">
                    <button className="btn btn-primary shadow mb-2">
                      My Orders
                    </button>
                  </NavLink>
                  <NavLink to="/manageorder" className="nav-route">
                    <button className="btn btn-primary shadow mb-2">
                      Manage Orders
                    </button>
                  </NavLink>
                  <NavLink to="/addnew" className="nav-route">
                    <button className="btn btn-info shadow mb-2">Add New</button>
                  </NavLink>
                </div>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
