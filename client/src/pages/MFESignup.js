import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MFESignup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    district: "",
    state: "",
    password: "",
  });
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:6100/api/mfe/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        district: credentials.district,
        state: credentials.state,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("Token", json.authToken);
      navigate("/mfe/dashboard");
    }

    if (json.error) {
      console.log(json.error);
      setError(json.error);
      setCredentials({
        email: "",
        district: "",
        state: "",
        password: "",
      });
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="District">District</label>
        <input type="text" value={credentials.district} name="district" onChange={onChange} placeholder="" />

        <label htmlFor="State">State</label>
        <input type="text" value={credentials.state} name="state" onChange={onChange} placeholder="" />

        <label htmlFor="Email">Email</label>
        <input type="email" value={credentials.email} name="email" onChange={onChange} placeholder="" />

        <label htmlFor="Password">Password</label>
        <input type="password" value={credentials.password} name="password" onChange={onChange} placeholder="" />

        <button>Sign Up</button>
        {error && <div>{error}</div>}
      </form> */}

      <div>
        <section className=" gradient-form" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="mx-md-4">
                        <div className="text-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{ width: 185 }}
                            alt="logo"
                          />
                          <h4 className="mt-1 mb-5 pb-1">MFE Sign up!!</h4>
                        </div>
                        <form>
                          <h5>New Account</h5>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={credentials.district}
                              name="district"
                              onChange={onChange}
                              placeholder="District"
                              className="form-control"
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={credentials.state}
                              name="state"
                              onChange={onChange}
                              placeholder="State"
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
                            <p>SET UP A PASSWORD</p>

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
                        <h4 className="mb-4">MFE</h4>
                        <p className="small mb-0">
                          The Micro Food Processing Mills Portal is your
                          all-in-one solution for small-scale food processors
                          and entrepreneurs. Access valuable resources, business
                          development support, and stay up to date with the
                          latest technology and regulations. Connect with
                          experts, find funding options, and enhance your skills
                          through training programs. Join today and empower your
                          micro food processing business for success.
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

export default MFESignup;
