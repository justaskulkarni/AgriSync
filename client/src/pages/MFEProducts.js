// ALL THE PRODUCTS

import React from "react";
import img1 from "../images/basmatirice.jpg";
import img2 from "../images/farmerketchup.jpg";
import img3 from "../images/garlicoil.jpg";
import img4 from "../images/pulses.jpg";
import img5 from "../images/soyabean.jpg";
import img6 from "../images/milkpowder.jpg";

function MFEProducts() {
  return (
    <>
      <h1 className="text-center">All our MFE Products!!</h1>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>Bestsellers</strong>
          </h4>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img src={img2} className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">$61.99</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img src={img1} className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-success ms-2">Eco</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">$61.99</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img3} className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">
                    <s>$61.99</s>
                    <strong className="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img4} className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-success ms-2">Eco</span>
                          <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">
                    <s>$61.99</s>
                    <strong className="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img src={img5} className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100" />
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">$61.99</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img6} className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                          <span className="badge bg-success ms-2">Eco</span>
                          <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">
                    <s>$61.99</s>
                    <strong className="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MFEProducts;
