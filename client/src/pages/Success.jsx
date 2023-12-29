import React from "react";
import "../stylesheets/Success.css";

function Success() {
  return (
    <>
      <div className="contain">
        <div className="congrats">
          <h1>
            Congrat<span className="hide">ulation</span>s !
          </h1>

          <div className="text">
            <p>
              You have successfully booked an Request. <br />
              Here are your details
              <br />
              Date: 12.12.12
              <br />
              Time: 11am
              <br />
              ID: 12324
            </p>
            <p>Eagerly awaiting your visit</p>
          </div>
          <p className="regards">Regards, Team Let's Endorse</p>
        </div>
      </div>
    </>
  );
}

export default Success;
