"use client";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const hamburg = () => {
    setIsOpen(true);
  };

  const cancel = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          Rabia <span>Khalid</span>
        </div>
        <div className="links">
          <div className="link">
            <a href="#">Home</a>
          </div>
          <div className="link">
            <a href="#">About</a>
          </div>
          <div className="link">
            <a href="#">Skills</a>
          </div>
          <div className="link">
            <a href="#">Services</a>
          </div>
          <div className="link">
            <a href="#">Contact</a>
          </div>
        </div>
        <i className="fa-solid fa-bars hamburg" onClick={hamburg}></i>
      </div>
      {isOpen && (
        <div className="dropdown">
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <i className="fa-solid fa-xmark cancel" onClick={cancel}></i>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
