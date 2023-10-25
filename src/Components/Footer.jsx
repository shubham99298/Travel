import React from "react";
import "../Styles/Footer.css";
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer_container ">
    <div class="footer_logo">
    <div className="left">
                <b className='b1'>Tra</b>
                <b className='b2'>Veller</b>
                
            </div>
    </div>
    <div class="link_lists">
      <h3>Main Links</h3>
      <ul>
        <li>Travel</li>
        <li>Discounts</li>
        <li>Offers</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="link_lists">
      <h3>Support</h3>
      <ul>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditons</li>
      </ul>
    </div>
    <div class="news_letter">
      <h3>Contact</h3>
      <input type="email" placeholder="Enter your Email..." />
      <h3>Follow Us</h3>
      <div class="icon_container">
        <div class="icon">
          <FaFacebook/>
        </div>
        <div class="icon">
         <FaTwitter/>
        </div>
        <div class="icon">
         <FaInstagram/>
        </div>
        <div class="icon">
        <FaYoutube/>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
