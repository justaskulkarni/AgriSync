import React from "react";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height={15}
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0, ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Farmer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MFE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PAC
                </a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}

          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}

      {/* Hero */}
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Heading</h1>
        <h4 className="mb-3">Subheading</h4>
        <a className="btn btn-primary" href role="button">
          Call to action
        </a>
      </div>
      {/* Hero */}
    </>
  );
};

export default Home;
