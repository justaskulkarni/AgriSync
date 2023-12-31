import React from "react";
import { useState, useEffect } from "react";
import MFEGradedCard from "../components/MFEGradedCard";
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "../stylesheets/pacdashboard.module.css";
import styles2 from "../stylesheets/card.module.css"
import { useNavigate, navigate } from "react-router-dom";
import "../stylesheets/Dashboard.css";

function MFEDashboard() {
  const [showSidebar, setShowSidebar] = useState(true);

  let navigate = useNavigate();

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };
  const [idArray, setIdArray] = useState([]);
  const handleClick = () => {
    navigate("/mfe/products");
  };
  const handleClick2 = () => {
    navigate("/mfe/return");
  };
  const getdata = async () => {
    const response = await fetch(
      "http://localhost:6100/api/mfe/getallgradedandnotreq/Thane",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const json = await response.json();

    if (json.success) {
      const newIdArray = json.data.map((item) => item._id);
      setIdArray(newIdArray);
    }
  };
  useEffect(() => {
    getdata();
  }, [idArray]);


  return (
    <>
      <div className="dashy">
        <div className={styles.column + " " + styles.left}>
          <div className={styles.smallcardleft}>
            <button className={styles.leftbutton} onClick={handleClick}>
              <span className={styles.notifications}>
                View all inhouse products
              </span>
            </button>
            <button className={styles.leftbutton} onClick={handleClick2}>
              <span className={styles.notifications}>
                Products being processed
              </span>
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
            <span className={styles.analytics}>All products</span>
            <span className={styles.welcometext}>Request products</span>
          </div>

          <span className={styles.mentorrequests2}>All graded products available at PAC: </span>
          <div className={styles.cardcontainer}>
            <tr style={{ "backgroundColor": "whitesmoke" }}>
              <td><p className={styles2.cardcontent} style={{ "paddingLeft": "8rem" }}>Name</p></td>
              <td><p className={styles2.cardcontent} style={{ "paddingLeft": "11rem" }}>Quantity</p></td>
              <td><p className={styles2.cardcontent} style={{ "paddingLeft": "11rem" }}>Grade</p></td>
              <td><p className={styles2.cardcontent} style={{ "paddingLeft": "12rem", "paddingRight": "8rem" }}>Make a Request</p></td>
            </tr>
            {idArray.map((id) => (
              <MFEGradedCard key={id} mentid={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MFEDashboard;
