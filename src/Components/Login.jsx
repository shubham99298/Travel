import React from "react";
import '../Styles/Login.css'
const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <b className="b1">Tra</b>
        <b className="b2">Veller</b>
      </div>

      <h1>Signup Form</h1>

      <form>
        <div className="signupform">
          <label>UserName:</label>
          <input type="text" required placeholder="xyz..." />

          <label>Password:</label>
          <input type="password" required placeholder="1234...." />
          <button className="button1">signup</button>
          <button className="button2">Login</button>
        </div>

      </form>
    </div>
  );
};

export default Login;
