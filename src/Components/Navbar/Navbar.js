import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const changeWidth = () => {
    setLargeur(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);
  return (
    <nav>
      <h1 className="titre">Ramael Maxence</h1>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste ">
          <li className="items">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "activeLink"
                  : "Link"
              }}
            >
              Accueil
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => {
                return isActive
                  ? "activeLink"
                  : "Link"
              }}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive
                  ? "activeLink "
                  : "Link"
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
      <button className="btn" onClick={toggleNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </nav>
  );
}
