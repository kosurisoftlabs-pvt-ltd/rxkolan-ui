import React from "react";
import "./newheader.css";

const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="container">
          <div className="top_contact-container">
            <div className="tel_container">
              <a href="tel:6303476264">
                <i class="fa-solid fa-phone "></i>+91-6303476264
              </a>
            </div>
            <div className="social-container">
              <a href="/" className="text-light bg-dark p-1 rounded">
                Partner with Us
              </a>
              <span className="p-1"></span>
              <a href="/" className="text-light bg-dark p-1 rounded">
                Upload Precription
              </a>
              <span className="p-1"></span>
              <a href="/login" className="text-light bg-dark p-1 rounded">
                Login/Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
