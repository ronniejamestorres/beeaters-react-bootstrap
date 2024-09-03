import React from "react";
import { NavLink } from "react-router-dom";

const MyNavbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white ">
      <div className="container-fluid">
        <img
          className="navbar-brand"
          src="https://ronniejamestorres.github.io/restaurant-css-framework/img/logo/beeaterslogocolor-01.png"
          alt="Brand Logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/MenuPage"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : ""}`
                }
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/PicturesPage"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : ""}`
                }
              >
                Pictures
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/RestaurantPage"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : ""}`
                }
              >
                Restaurant
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ContactPage"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
