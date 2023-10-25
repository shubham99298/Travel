import React from "react";
import "../Styles/Contact.css";

import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" style={{ width: "100%", height: "100vh" }}>
      <img className="imgcontact" src="https://svgsilh.com/svg/147495.svg" />
      <h2>Contact us</h2>
      <p>
        {" "}
        Welcome to <b>Traveller</b>! We're thrilled that you're interested in
        getting in touch with us. Whether you have questions, feedback, or
        simply want to say hello, we're here to assist you in every possible
        way. Your travel experience is important to us, and we want to ensure
        your journey is as smooth and enjoyable as possible.
      </p>

      <p>
        <h3> How to Reach Us:</h3>
        <b>Email</b>: You can drop us a line at <b>Traveller@gmail.com</b>, and
        our team will respond to your inquiry within 24-48 hours. We're
        available to help you plan your dream vacation, assist with any issues
        you may encounter, or answer your travel-related questions.
      </p>

      <p>
        <b>Phone</b>: For immediate assistance, you can give us a call at{" "}
        <b>96688484383</b>. Our dedicated customer support team is available
        during our office hours to assist you with any urgent matters.

        
      </p>
    
      <div className="icons">
    <div className="i">
       <FaPhone /> 
      
     </div>

     <div className="i">
       <FaMailBulk />
     </div>
    </div>
     </div>
    
   
 
  );
};

export default Contact;
