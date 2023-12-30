import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

const commodityList = [
  { name: 'Tomato', image: 'https://i.stack.imgur.com/N6LYW.jpg' },
  { name: 'Onion', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHx8fDA%3D' },
  { name: 'Chilly', image: 'https://www.shutterstock.com/image-photo/chili-pepper-isolated-on-white-600nw-1484363237.jpg' },
];

const districtList = ['Sangli', 'Raigarh', 'Thane',];
const stateList = ['Maharashtra', 'Haryana', 'Karnataka',];


const FarmerDashboard = () => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [isQuantityValid, setIsQuantityValid] = useState(false);
  const [currentTab, setCurrentTab] = useState(1)
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
        name: credentials.name.name,
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
    const formData = {
      name: credentials.name.name.trim(),
      district: credentials.district.trim(),
      quantity: credentials.quantity.toString(),
      state: credentials.state.trim(),
    }
    const response = await fetch("http://localhost:6100/api/request/postreq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const json = await response.json();

    if (json.success) {
      alert("Data: "+JSON.stringify(formData))
      navigate("/success", {
        state: {
          name: credentials.name.name.trim(),
          district: credentials.district.trim(),
          quantity: credentials.quantity.toString(),
          state: credentials.state.trim(),
          price: price,
        }
      });
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

  const renderTabs = () => {
    if (currentTab === 1) {
      return (
        <Autocomplete
          options={commodityList}
          getOptionLabel={(option) => option.name}
          style={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Commodity name"
              variant="outlined"
            />
          )}
          value={credentials.name}
          onChange={(_, newValue) => {
            setCredentials({ ...credentials, name: newValue });
            setIsNextButtonDisabled(!newValue);
          }}
          renderOption={(props, option) => (
            <li {...props}>
              <Avatar src={option.image} alt={option.name} className='m-2' />
              {option.name}
            </li>
          )}
        />

      )
    }
    if (currentTab === 2) {
      return (
        <div className="form-outline mb-4">
          <input
            type="number"
            value={credentials.quantity}
            name="quantity"
            defaultValue={0}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value, 10);
              setCredentials({ ...credentials, quantity: newQuantity });
              setIsQuantityValid(newQuantity > 0);
              setIsNextButtonDisabled(!newQuantity || newQuantity <= 0);
            }}
            placeholder="Quantity"
            className="form-control"
          />
        </div>
      )
    }
    if (currentTab === 3) {
      return (
        <Autocomplete
          options={districtList}
          getOptionLabel={(option) => option}
          style={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="District"
              variant="outlined"
            />
          )}
          value={credentials.district}
          onChange={(_, newValue) => {
            setCredentials({ ...credentials, district: newValue });
            setIsNextButtonDisabled(!credentials.district); // Disable if district or state is not selected
          }}
        />

      )
    }

    if (currentTab === 4) {
      return (

        <>
          <Autocomplete
            options={stateList}
            getOptionLabel={(option) => option}
            style={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="State"
                variant="outlined"
              />
            )}
            value={credentials.state}
            onChange={(_, newValue) => {
              setCredentials({ ...credentials, state: newValue });
              setIsNextButtonDisabled(!credentials.state || !newValue); // Disable if district or state is not selected
            }}
          />

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
        </>

      )
    }
  }
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
                          <h4 className="mt-1 pb-1">
                            Please Fill Up the Request Form
                          </h4>
                        </div>
                        <form>
                          {/* <h5>New Account</h5> */}
                          <h6 className='text-center'>{currentTab} of 4</h6>

                          <div className="form-outline mb-4">

                            {renderTabs()}

                          </div>



                          <div className='text-center'>
                            {currentTab > 1 &&
                              <Button variant='contained' className='mx-2' onClick={() => setCurrentTab(currentTab - 1)}
                              >Previous</Button>
                            }

                            {currentTab < 4 &&
                              <Button variant='contained' className='mx-2' onClick={() => setCurrentTab(currentTab + 1)} disabled={isNextButtonDisabled}>Next</Button>
                            }
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