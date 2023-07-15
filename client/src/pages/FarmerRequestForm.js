import React from 'react'

const FarmerDashboard = () => {
  return (
    <>
    <div>
        <section
          className="h-100 gradient-form"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{ width: 185 }}
                            alt="logo"
                          />
                          <h4 className="mt-1 mb-5 pb-1">
                            Please Fill Up the Request Form
                          </h4>
                        </div>
                        <form>
                          {/* <h5>New Account</h5> */}

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              //id="form2Example11" we need to make different IDs
                              className="form-control"
                              placeholder="Enter your Full name"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example11"
                            >
                              Name of the Commodity
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="number"
                              id="form2Example11"
                              className="form-control"
                              placeholder="Enter your email address"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example11"
                            >
                              Quantity (in Kg)
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form2Example22"
                              className="form-control"
                              // placeholder="Enter your desired username"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example22"
                            >
                              District
                            </label>
                          </div>

                          
                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 m-5"
                              type="button"
                            >
                              Send Request
                            </button>
                          </div>


                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">
                          We are more than just a company
                        </h4>
                        <p className="small mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FarmerDashboard