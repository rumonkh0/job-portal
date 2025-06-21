import React from "react";

function header() {
  return (
    <div>
      <header className="mt-8 w-[1170px] h-[48px] flex justify-between items-center">
        <div className="header flex gap-2 font-bold text-lg">
          <img src="/logo.svg" alt="" /> JobInto{" "}
        </div>
        <ul className="nav flex justify-center items-center gap-7">
          <li className="nav-item border-b border-blue-600 text-blue-600">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <div className="auth flex justify-center items-center gap-8">
          <div className="login text-blue-600 px-9 py-3 border rounded border-gray-500">
            Login
          </div>
          <div className="register text-white px-9 py-3 rounded border-blue-700 bg-blue-700">
            Register
          </div>
        </div>
      </header>
    </div>
  );
}

export default header;
