import React from 'react'
import { FaGoogle } from "react-icons/fa";

const Siignup = () => {
  return (
    <div className="login">
    <div className="left">
      <b className="b1">Tra</b>
      <b className="b2">Veller</b>
    </div>

    <h1>SignUp </h1>

    <form>
      <div className="signupform">
         
        <label>UserName:</label>
        <input type="text" required placeholder="Username" />

        <label>Email:</label>
          <input type='email' placeholder='Email'/>

        <label>Password:</label>
        <input type="password" required placeholder="Password" />
        <button className="button1">SIGN IN</button>
        <button className="button2">CONTINUE WITH <FaGoogle/></button>
        
      </div>

    </form>
  </div>
);
};

export default Siignup
