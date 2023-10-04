import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact" style={{ width: "100%", height: "100vh" }}>
      <img
        className="imgcontact"
        src="https://clipart-library.com/images/dT9rb8R8c.png"
      />
      <h2>Contact us</h2>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
        iste corporis tempore necessitatibus inventore ex? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Voluptates, iste corporis tempore
        necessitatibus inventore ex?
      </p>
      <img
        className="imgcontact"
        src="https://static.vecteezy.com/system/resources/previews/002/079/984/non_2x/phone-icon-flat-style-isolated-on-grey-background-telephone-symbol-call-illustration-sign-for-web-and-mobile-app-free-vector.jpg"
      />
      <b>+91 96688484383</b>
    </div>
  );
};

export default Contact;
