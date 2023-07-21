import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../stylesheets/FarmerLogin.css";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:6100/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
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
        password: "",
      });
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit} >
                <label htmlFor="Email">Email</label>
                <input type="email" value={credentials.email} name="email" onChange={onChange} placeholder="" />

                <label htmlFor="Password">Password</label>
                <input type="password" value={credentials.password} name="password" onChange={onChange} placeholder="" />

                <button>Login</button>
                {error && <div>{error}</div>}
            </form> */}

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
                        <h4 className="mt-1 mb-5 pb-1">Farmer Login!!</h4>
                      </div>
                      <form>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          {/* <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                          /> */}
                          <input
                            type="email"
                            value={credentials.email}
                            name="email"
                            onChange={onChange}
                            placeholder="Email"
                            id="form2Example11"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Email
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            value={credentials.password}
                            name="password"
                            onChange={onChange}
                            placeholder="Password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                            onClick={handleSubmit}
                          >
                            Log in
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            <Link to="/farmer/signup">Create New</Link>
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
                        knowledge repository, Farmers Portal empowers farmers to
                        make informed decisions, optimize their farming
                        operations, and connect with a supportive community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
