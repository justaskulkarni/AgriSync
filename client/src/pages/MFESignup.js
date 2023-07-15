import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PACSignup = () => {
  const [credentials, setCredentials] = useState({ email: "", district: "", state: "", password: "" });
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
      body: JSON.stringify({ email: credentials.email, district: credentials.district, state: credentials.state, password: credentials.password }),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("Token", json.authToken);
      navigate("/mfe/dashboard");
    }

    if (json.error) {
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
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  )
}

export default PACSignup