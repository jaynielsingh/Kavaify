import React from "react";
import logo from "./Kavaify.png"
import "./navbar.styles.css"


const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container px-5">
          <div>
            <a class="navbar-brand" href="#home">
              <img src={logo} alt="" width="50" height="40" class="logo me-4" />
              Kavaify
            </a>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#register">
                  Sign Up
                </a>
              </li>
            </ul>
            <div class="mt-3 ms-3 " id="google_translate_element"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
