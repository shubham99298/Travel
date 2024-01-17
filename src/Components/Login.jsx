import React from "react";
import '../Styles/Login.css'
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <b className="b1">Tra</b>
        <b className="b2">Veller</b>
      </div>

      <h1>Sign In Form</h1>

      <form>
        <div className="signupform">
          <label>UserName:</label>
          <input type="text" required placeholder="Username" />

          <label>Password:</label>
          <input type="password" required placeholder="Password" />
          <button className="button1">SIGN IN</button>
          <button className="button2">CONTINUE WITH <FaGoogle/></button>
          <span>Don't Have a account ?<Link to="/signup" style={{color:"grey"}}>Signup</Link> </span>
          
        </div>

      </form>
    </div>
  );
};

export default Login;
