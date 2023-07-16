import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "../stylesheets/pacdashboard.module.css";
import { useNavigate, navigate } from "react-router-dom";

function FarmerDashboard() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [idArray, setIdArray] = useState([]);
  let navigate = useNavigate();

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <>
      <div className="dashy">
        <div className="container">
          <div className={styles.column + " " + styles.left}>
            <div className={styles.smallcardleft}>
              <button className={styles.leftbutton}>
                <span className={styles.notifications}>Grade requests</span>
              </button>
              <button className={styles.leftbutton}>
                <span className={styles.notifications}>At PAC</span>
              </button>
              <button className={styles.leftbutton}>
                <span className={styles.notifications}>At MFE</span>
              </button>
              <button className={styles.leftbutton}>
                <span className={styles.notifications}>Returned by MFE</span>
              </button>
              <button className={styles.leftbutton}>
                <span className={styles.notifications}>Sent to CPC</span>
              </button>
            </div>
            {localStorage.getItem("Token") && (
              <button className={styles.logoutbtn} onClick={handleLogout}>
                <span className={styles.welcometext2}>Logout</span>
              </button>
            )}
          </div>
          <div className={styles.column + " " + styles.middle}>
            <div className={styles.leftbox}>
              <span className={styles.analytics}>All request</span>
              <span className={styles.welcometext}>
                Receive and grade requests
              </span>
            </div>

            <span className={styles.mentorrequests2}>All requests : </span>
            <div className={styles.cardcontainer}>
              {idArray.map((id) => (
                <Card key={id} mentid={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FarmerDashboard;
