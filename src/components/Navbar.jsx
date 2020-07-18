import React, { Fragment } from "react";
import "./styles/Navbar.scss";
import logo from "../assets/JD.svg";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <section className="navbar--img">
          <img src={logo} alt="JD logo" />
        </section>
        <section className="navbar__list-container">
          <ul className="navbar__list">
            <li className="navbar__list-element">
              <a href="">Contact</a>
            </li>
            <li className="navbar__list-element">
              <a href="">About</a>
            </li>
            <li className="navbar__list-element">
              <a href="">Blog</a>
            </li>
          </ul>
        </section>
      </div>
    </Fragment>
  );
};

export default Navbar;
