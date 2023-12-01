import React from "react";
import "../stylesheets/Home.css";


const Home = () => {
  return (
    <>
      {/* <div>
        <div>
          <div className="container">
            <div className="row d-flex justify-content-between my-5">
              <div className="  col-md-4">
                <div className="card p-5 pr-md-0 text-left bg-14">
                  <h1 className="mb-3">Farmer</h1>
                  <h4 className="mb-3">A portal for Farmers</h4>
                  <a
                    className="btn btn-primary btn-light-dark"
                    href
                    role="button"
                  >
                    <h4>
                      <Link to="/farmer/login">Login</Link>{" "}
                    </h4>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-5 pl-md-0 text-left bg-23 ">
                  <h1 className="mb-3">MFE</h1>
                  <h4 className="mb-3">
                    A portal for the people working in MFE
                  </h4>
                  <a
                    className="btn btn-primary btn-light-dark"
                    href
                    role="button"
                  >
                    <h4>
                      <Link to="/mfe/dashboard">Login</Link>{" "}
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row d-flex justify-content-between my-5">
              <div className="col-md-4">
                <div className="card p-5 pl-md-0 text-left bg-23 ">
                  <h1 className="mb-3">PAC</h1>
                  <h4 className="mb-3">
                    A portal for the people working in PAC
                  </h4>
                  <a
                    className="btn btn-primary btn-light-dark"
                    href
                    role="button"
                  >
                    <h4>
                      <Link to="/pac/dashboard">Login</Link>{" "}
                    </h4>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-5 pr-md-0 text-left bg-14 ">
                  <h1 className="mb-3">CPC</h1>
                  <h4 className="mb-3">
                    A portal for the people working in CPC
                  </h4>
                  <a
                    className="btn btn-primary btn-light-dark"
                    href
                    role="button"
                  >
                    <h4>
                      <Link to="/cpc/dashboard">Login</Link>{" "}
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/009/302/810/non_2x/beautiful-forest-panoramic-realistic-wanderlust-background-landscape-dark-trees-pine-in-mist-design-mystery-fog-in-park-concept-nature-beauty-tourism-web-banner-free-vector.jpg')", backgroundSize: "auto", height: 670, backgroundRepeat: "repeat-x" }}
      >
        
          <div className='d-flex justify-content-center align-items-center '>
            <div className='text-white'>
              <h1 className='mb-3'>AgriSync</h1>
              <h4 className='mb-3'>Enabling seamless coordination</h4>
              <h4 className="mb-3">& visibility in agricultural value chain</h4>
            </div>
          </div>
        
      </div>
    </header>
    </>
  );
};

export default Home;
