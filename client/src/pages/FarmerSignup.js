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
          <div>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className=" mx-md-4">
                        <div className="text-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{ width: 185 }}
                            alt="logo"
                          />
                          <h4 className="mt-1 mb-5 pb-1">Farmer Signup!!</h4>
                        </div>
                        <form>
                          <h5>New Account</h5>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={credentials.name}
                              name="name"
                              onChange={onChange}
                              placeholder="Name"
                              className="form-control"
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              value={credentials.email}
                              name="email"
                              onChange={onChange}
                              placeholder="Email id"
                              className="form-control"
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              value={credentials.password}
                              name="password"
                              onChange={onChange}
                              placeholder="Password"
                              className="form-control"
                            />
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 m-5"
                              type="button"
                              onClick={handleSubmit}
                            >
                              Confirm
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">Farmer</h4>
                        <p className="small mb-0">
                          Farmers Portal is a revolutionary online platform
                          exclusively designed for farmers. It offers a
                          user-friendly interface where farmers can access vital
                          agricultural data and resources with ease. From
                          personalized dashboards and crop management tools to
                          market insights, weather monitoring, and a vast
                          knowledge repository, Farmers Portal empowers farmers
                          to make informed decisions, optimize their farming
                          operations, and connect with a supportive community
                          Helpline Number 9944886622
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
  );
};

export default FarmerSignup;
