import React from "react";
import "../stylesheets/Home.css";

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://placeholder.pics/svg/150x50/888888/EEE/Logo"
              alt="..."
              height={36}
            />
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="container">
        <div className="row d-flex justify-content-between my-5">
          <div className="p-5 pr-md-0 text-left bg-14 col-md-4">
            <h1 className="mb-3">Farmer</h1>
            <h4 className="mb-3">A portal for Farmers</h4>
            <a className="btn btn-primary btn-light-dark" href role="button">
            <h4>Login</h4>
            </a>
          </div>
          <div className="p-5 pl-md-0 text-left bg-23 col-md-4">
            <h1 className="mb-3">MFE</h1>
            <h4 className="mb-3">A portal for the people working in MFE</h4>
            <a className="btn btn-primary btn-light-dark" href role="button">
            <h4>Login</h4>
            </a>
          </div>
        </div>
      </div>

      {/* Second container for cards */}
      <div className="container">
        <div className="row d-flex justify-content-between my-5">
          <div className="p-5 pl-md-0 text-left bg-23 col-md-4">
            <h1 className="mb-3">PAC</h1>
            <h4 className="mb-3">A portal for the people working in PAC</h4>
            <a className="btn btn-primary btn-light-dark" href role="button">
            <h4>Login</h4>
            </a>
          </div>
          <div className="p-5 pr-md-0 text-left bg-14 col-md-4">
            <h1 className="mb-3">CPC</h1>
            <h4 className="mb-3">A portal for the people working in CPC</h4>
            <a className="btn btn-primary btn-light-dark" href role="button">
            <h4>Login</h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
