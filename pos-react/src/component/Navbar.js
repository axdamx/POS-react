import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const carts = useSelector((state) => state.cartReducer.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info" fixed="top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          React Project
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart ({carts.length})
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">
                Order
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
