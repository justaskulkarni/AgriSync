import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import "../stylesheets/FarmerLogin.css";
import styles from "../stylesheets/card.module.css";
const FarmerSignup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    pno: "",
    name: "",
    password: "",
    otp: 0,
    otp1: 0
  });
  const [error, setError] = useState(null);
  const [mailSent, setMailSent] = useState(false)
  const [smsSent, setsmsSent] = useState(false)
  let navigate = useNavigate();
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleMail = async (e) =>{
    e.preventDefault()
    const response = await fetch("http://localhost:6100/api/user/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
      }),
    })
    setMailSent(true)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:6100/api/user/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        otp: credentials.otp,
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
      setError("Hi");
      setCredentials({
        email: "",
        name: "",
        password: "",
      });
      setTimeout(() => {
        setError("Access Denied! Wrong OTP");
      }, 4000);
    }
  };

  //for sms otp 
  // Change this part in your code
const handleChange = (e) => {
  const { name, value } = e.target;
  // Use setCredentials instead of this.setState
  setCredentials((prevCredentials) => ({
    ...prevCredentials,
    [name]: value,
  }));
};


const configureCaptcha = () => {
  // Check if window.recaptchaVerifier is not already defined
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("Recaptcha verified");
      },
      'expired-callback': () => {
        // Handle expired reCAPTCHA if needed
        console.log("Recaptcha expired");
      },
      defaultCountry: "IN"
    });
  }
};


  const onSignInSubmit = async (e) => {
    // if (e && e.preventDefault) { e.preventDefault(); }

        configureCaptcha()
        const phoneNumber = "+91" + credentials.pno;
        console.log(phoneNumber)

        
        try {
          // Sign in with phone number
          const appVerifier = window.recaptchaVerifier;
          const auth = getAuth();
          const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      
          // Prompt user to enter the code sent to their phone
          window.confirmationResult = confirmationResult;
          console.log("SMS sent. Enter the code.");
        } catch (error) {
          // Handle error
          console.error("Error signing in with phone number:", error.message);
        }
        setsmsSent(true)
      };
    
      const onSubmitOTP = async (e) => {
        // if (e && e.preventDefault) { e.preventDefault(); }
        const code = credentials.otp1;
        console.log(code)
        await window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(JSON.stringify(user))
            alert("User is verified")
            // ...
          }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });
      }



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
                        <form >
                          <h5>New Account</h5>
                          {!mailSent && (
                            <div>
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
                              
                              <div id="sign-in-button"> </div>
                              <div className="form-outline mb-4">
                                <input
                                  type="number"
                                  value={credentials.pno}
                                  name="pno"
                                  onChange={handleChange}
                                  placeholder="Phone Number"
                                  className="form-control"
                                  required
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
                            </div>
                          )}
                          {mailSent && (
                          <div className="form-outline mb-4">
                            <label>
                              Enter otp recieved on mail
                            </label>
                            <input
                              type="number"
                              value={credentials.otp}
                              name="otp"
                              onChange={onChange}
                              placeholder="Enter OTP Received on Mail"
                              className="form-control"
                            />
                          </div>
                          )}
                          {/* for sms */}
                         
                         
                          {smsSent && (
                          <div className="form-outline mb-4">
                            <label>
                              Enter otp recieved on Phone number
                            </label>
                            <input
                              type="number"
                              value={credentials.otp1}
                              name="otp1"
                              onChange={handleChange}
                              placeholder="Enter OTP Received on SMS"
                              className="form-control"
                            />
                          </div>
                          )}
                        

                          {!mailSent && (
                          <div className="text-center pt-1 mb-1 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg m-3"
                              style={{ background: 'linear-gradient(to right, #40E0D0, #6495ED)' }}
                              type="button"
                              onClick={handleMail}
                            >
                              Send Email OTP
                            </button>
                          </div>
                          )}

                          {mailSent && (
                          <div className="text-center pt-1 mb-1 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg m-3"
                              style={{ background: 'linear-gradient(to right, #40E0D0, #6495ED)' }}
                              type="button"
                              onClick={handleSubmit}
                            >
                              Verify Email OTP
                            </button>
                          </div>
                          )}

                          {/* sms */}
                          {!smsSent && (
                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg m-3"
                              style={{ background: 'linear-gradient(to right, #40E0D0, #6495ED)' }}
                              type="button"
                              onClick={onSignInSubmit}
                            >
                              Send SMS OTP
                            </button>
                          </div>
                         )}
                        

                          {smsSent && (
                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg m-3"
                              style={{ background: 'linear-gradient(to right, #40E0D0, #6495ED)' }}
                              type="button"
                              onClick={onSubmitOTP}
                            >
                              Verify SMS OTP
                            </button>
                          </div>
                           )}
                          
                        </form>
                    {error && (
                      <div className={styles.error}>Access Denied! Wrong OTP</div>
                    )}
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center" style={{ background: 'linear-gradient(to right, #40E0D0, #6495ED)' }}>
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
