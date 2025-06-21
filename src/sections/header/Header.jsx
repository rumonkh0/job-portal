import React from "react";

function header() {
  return (
    <div>
      <header>
        <div className="header"> JobInto </div>
        <ul className="nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <div className="auth">
          <div className="login"></div>
          <a href="/login">Login</a>
        </div>
        <div className="register">
          <a href="/register">Register</a>
        </div>
      </header>
    </div>
  );
}

export default header;
