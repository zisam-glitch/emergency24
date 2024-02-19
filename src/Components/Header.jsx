import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Images/logo.png";
import Nav from './nav-moble';

function Header() {
  return (
    <>
      <section className="header">
        <div className="wraper-header">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="menu">
            <ul class="navbar-na">
              <li class="nav-item ">
                <a id="active" class="nav-links" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-links" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-links" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-links" href="#reviews">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-links" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a id="callnow" class="nav-links" href="tel:0113 322 8354">
                  Call Emergency Hotline: 0113 322 8354
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mobile">
        <Nav />
      </section>
    </>
  );
}

export default Header;
