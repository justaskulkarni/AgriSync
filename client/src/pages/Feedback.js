import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/FarmerLogin.css";
const FarmerSignup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:6100/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        name: credentials.name,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("Token", json.authToken);
      navigate("/farmer/requestform");
    }

    if (json.error) {
      setError(json.error);
      setCredentials({
        email: "",
        name: "",
        password: "",
      });
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };
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
                          <h4 className="mt-1 mb-5 pb-1">Feedback Form</h4>
                        </div>
                        <form>
                          {/*<h5>New Account</h5>*/}

                          <div className="form-outline mb-4">
                          <label
                              className="form-label"
                              htmlFor="form2Example11"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              value={credentials.name}
                              name="name"
                              onChange={onChange}
                              placeholder="Please enter your Name"
                              className="form-control"
                            />                            
                          </div>

                          <div className="form-outline mb-4">
                          <label
                              className="form-label"
                              htmlFor="form2Example11"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              value={credentials.email}
                              name="email"
                              onChange={onChange}
                              placeholder="Please enter your Email-id"
                              className="form-control"
                            />
                          </div>

                          <div className="form-outline mb-4">
                          <label
                              className="form-label"
                              htmlFor="form2Example11"
                            >
                              Subject
                            </label>
                            <input
                              type="email"
                              value={credentials.email}
                              name="email"
                              onChange={onChange}
                              placeholder="Please enter the subject of your concern "
                              className="form-control"
                            />
                          </div>

                          <div className="form-outline mb-4">
                          <label
                              className="form-label"
                              htmlFor="form2Example11"
                            >
                              Description
                            </label>
                            <input
                              type="email"
                              value={credentials.email}
                              name="email"
                              onChange={onChange}
                              placeholder="Please Elaborate your views here"
                              className="form-control"
                            />
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 m-5"
                              type="button"
                              onClick={handleSubmit}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">Driving Excellence with Your Feedback!</h4>
                       
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
  );
};

export default FarmerSignup;

{/* <p className="small mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p> */}
