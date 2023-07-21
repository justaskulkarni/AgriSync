import React from "react";
import "../stylesheets/Home.css";

import Footer from "./Footer";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <div>
        {/* Hero */}
        <div>
          <div className="container">
            <div className="row d-flex justify-content-between my-5">
              <div className="  col-md-4">
                <div className="card p-5 pr-md-0 text-left bg-14">
                  <h1 className="mb-3">Farmer</h1>
                  <h4 className="mb-3">A portal for Farmers</h4>
                  <a
                    className="btn btn-primary btn-light-dark"
                    href
                    role="button"
                  >
                    <h4>
                      <Link to="/farmer/login">Login</Link>{" "}
                    </h4>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-5 pl-md-0 text-left bg-23 ">
                  <h1 className="mb-3">MFE</h1>
                  <h4 className="mb-3">
                    A portal for the people working in MFE
                  </h4>
                  <a
                    className="btn btn-primary btn-light-dark"
                    href
                    role="button"
                  >
                    <h4>
                      <Link to="/mfe/dashboard">Login</Link>{" "}
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero */}

          {/* Second container for cards */}
          <div className="container">
            <div className=" row d-flex justify-content-between my-5">
              <div className="col-md-4">
                <div className="card p-5 pl-md-0 text-left bg-23 ">
                  <h1 className="mb-3">PAC</h1>
                  <h4 className="mb-3">
                    A portal for the people working in PAC
                  </h4>
                  <a
                    className="btn btn-primary btn-light-dark"
                    href
                    role="button"
                  >
                    <h4>
                      <Link to="/pac/dashboard">Login</Link>{" "}
                    </h4>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-5 pr-md-0 text-left bg-14 ">
                  <h1 className="mb-3">CPC</h1>
                  <h4 className="mb-3">
                    A portal for the people working in CPC
                  </h4>
                  <a
                    className="btn btn-primary btn-light-dark"
                    href
                    role="button"
                  >
                    <h4>
                      <Link to="/cpc/dashboard">Login</Link>{" "}
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
