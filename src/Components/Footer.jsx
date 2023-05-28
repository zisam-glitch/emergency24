import React from "react";
import Logo from "../Images/white.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <section class="footer">
      <div className="ftrrr">
        <div className="clss">
          <div className="logoz">
            <img src={Logo} alt="" />
          </div>
          <div className="iconm">
            <FaFacebookSquare />
            <FaTwitter />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
        </div>
        <div className="coppy">
          <hr />
          <h5>Copyright 2023 emergency247dentist</h5>
        </div>
    </section>
  );
}

export default Footer;
