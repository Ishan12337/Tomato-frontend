import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Crafted with passion, served with flavor. Tomato brings you the finest dishes to satisfy every craving.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Plicy</li>
          </ul>

        </div>
        <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li><b>Contact us:- </b>+91-930-236-3385</li>
                <li><b>Email:- </b>tomato087@gmail.com</li>
             </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2000 @ Tomato.com-All Right Reserved.</p>
    </div>
  );
};

export default Footer;
