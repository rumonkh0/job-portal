import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const [signin] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeClass = "border-b border-blue-600 text-blue-600";

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div>
      <header className="mt-8 w-[1170px] h-[48px] flex justify-between items-center">
        <div className="header flex gap-2 font-bold text-lg">
          <img src="/logo.svg" alt="" /> JobInto{" "}
        </div>
        <nav className="nav tranal flex justify-center items-center gap-7">
          <NavLink to="/"
            className={({ isActive }) => `${isActive ? activeClass : ""}`}
          >
            Home
          </NavLink>
          <NavLink to="/about"
            className={({ isActive }) => `${isActive ? activeClass : ""}`}
          >
            About Us
          </NavLink>
          <NavLink to="/contact"
            className={({ isActive }) => `${isActive ? activeClass : ""}`}
          >
            Contact Us
          </NavLink>
        </nav>
        <div
          className={`auth relative flex justify-center items-center transition-all ${
            signin ? " gap-3" : " gap-8"
          }`}
          ref={dropdownRef}
          onClick={() => setOpen(!open)}
        >
          {!signin ? (
            <>
              <Link to="/login" className="login text-blue-600 px-9 py-3 border rounded border-gray-500">
                Login
              </Link>
              <Link to="/register" className="register text-white px-9 py-3 rounded border-blue-700 bg-blue-700">
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="cursor-pointer ">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/avatar.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-start cursor-pointer">
                <div className="text-lg font-medium">MD Rumon Khan</div>
                <div className="text-gray-500">Software Engineer</div>
              </div>
              {open && (
                <div className="absolute w-[300px] shadow-2xl shadow-neutral-600 bg-gray-100 bottom-0 right-0 translate-y-77 z-9 100  rounded-lg ">
                  <div className="relative flex gap-4 p-4 pb-6  cursor-pointer">
                    <div>
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src="/avatar.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <div className="text-lg font-medium">MD Rumon Khan</div>
                      <div className="text-gray-500">Software Engineer</div>
                    </div>
                    <img
                      className="absolute top-0 right-4 -translate-y-full z-22"
                      src="/trigon.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 py-2 px-6 border-t border-b border-gray-400 hover:bg-white cursor-pointer">
                      <img className="w-6 h-6" src="/setting.svg" alt="" /> My
                      Profile
                    </div>
                    <div className="flex items-center gap-3 py-2 px-6  hover:bg-white cursor-pointer">
                      <img className="w-6 h-6" src="/setting.svg" alt="" /> My
                      Jobs
                    </div>
                    <div className="flex items-center gap-3 py-2 px-6 border-t border-b cursor-pointer border-gray-400 hover:bg-white">
                      <img className="w-6 h-6" src="/setting.svg" alt="" />
                      Settings
                    </div>
                  </div>
                  <div className="text-center cursor-pointer pt-6 pb-4 text-lg text-blue-700 font-medium">
                    Sing Out
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
