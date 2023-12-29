import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const FarmerDashboard = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", quantity: "", district: "", state: "" });
  const [price, setPrice] = useState(null)
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handlePriceFind = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:6100/api/request/getsellingprice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        quantity: credentials.quantity,
      }),
    })

    const json = await response.json()
    console.log(json)
    if (json.success) {
      setPrice(json.price)
      console.log(json.price)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:6100/api/request/postreq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name.trim(),
        district: credentials.district.trim(),
        quantity: credentials.quantity.trim(),
        state: credentials.state.trim(),
      }),
    });

    const json = await response.json();

    if (json.success) {
      navigate("/success");
    }

    if (json.error) {
      console.log(json.error)

      setCredentials({
        email: "",
        district: "",
        state: "",
        password: "",
      });

    }
  };
  return (
    <>
      <div>
        <section
          className="h-100 gradient-form"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="container  h-100">
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
                          <h4 className="mt-1 mb-5 pb-1">
                            Please Fill Up the Request Form
                          </h4>
                        </div>
                        <form>
                          {/* <h5>New Account</h5> */}

                          <div className="form-outline mb-4">

                            <input
                              type="text"
                              value={credentials.name}
                              name="name"
                              onChange={onChange}
                              placeholder="Commodity name"
                              className="form-control"
                            />

                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={credentials.quantity}
                              name="quantity"
                              onChange={onChange}
                              placeholder="Quantity"
                              className="form-control"
                            />

                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={credentials.district}
                              name="district"
                              onChange={onChange}
                              placeholder="district"
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
                          {price === null && (
                            <div className="text-center pt-1 mb-2 pb-1">
                              <button
                                className="btn btn-primary btn-block m-2"
                                type="button"
                                style={{ background: 'linear-gradient(to right, #40E0D0, #6495ED)' }}
                                onClick={handlePriceFind}
                              >
                                Find Out Price
                              </button>
                            </div>
                          )}
                          <div className="form-outline mb-4">
                            {price !== null && (
                              <div>
                                <h5 style={{ fontFamily: 'Georgia, serif', color: '#009900' }} >The price is: Rs.{price}</h5>
                                <h5 style={{ fontFamily: 'Georgia, serif', color: '#009900' }} >Place a Request if you are happy with the price</h5>
                                <button
                                  className="btn btn-primary btn-block fa-lg warm-flame-gradient m-2"
                                  type="button"
                                  style={{ background: 'linear-gradient(to right, #40E0D0, #6495ED)' }}
                                  onClick={handleSubmit}
                                >
                                  Submit Request
                                </button>
                              </div>

                            )}
                          </div>

                        </form>

                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center" style={{ background: 'linear-gradient(to right, #40E0D0, #6495ED)' }}>
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">
                          Raise commodity request
                        </h4>
                        <p className="small mb-0">
                          The Farming Request Form is a streamlined online solution designed to facilitate farmers in submitting their farming requests with ease. Whether you need assistance, resources, or have specific farming requirements, this form simplifies the process of reaching out for support at the farming level. Submit your requests quickly and efficiently, ensuring that your farming needs are addressed promptly and effectively. Experience the convenience of the Farming Request Form and unlock the support you need to enhance your farming operations.
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