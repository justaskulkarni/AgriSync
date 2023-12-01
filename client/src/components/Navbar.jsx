import React from "react";
import logo from "../images/logo (2).jpeg";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-my static-top sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="d-flex">
              <img src={logo} alt="..." height={36} />{" "}
              <a className="mx-3 my-1 fw-bold text-dark" href="/">Lets Endorse</a>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="/farmer/login">
                  Farmer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/pac/dashboard">
                  PAC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/mfe/dashboard">
                  MFE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/cpc/dashboard">
                  CPC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
