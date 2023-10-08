import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <div className="mainfooter">
      <footer class="footer">
        <hr/>
        <b className="b1">Tra</b>
        <b className="b2">Veller</b>
        <div class="footer-cols">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Favourites</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
            <li>
              <a href="#">QA</a>
            </li>
          </ul>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
