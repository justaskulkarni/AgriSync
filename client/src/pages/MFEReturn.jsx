import React from "react";
import { useState, useEffect } from "react";
import MFEReturnCard from "../components/MFEReturnCard";
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "../stylesheets/pacdashboard.module.css";
import styles2 from "../stylesheets/card.module.css"
import { useNavigate, navigate } from "react-router-dom";

function MFEReturn() {
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

  const getdata = async () => {
    const response = await fetch("http://localhost:6100/api/mfe/getalltaken", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (json.success) {
      const newIdArray = json.data.map((item) => item._id);
      setIdArray(newIdArray);
    }
  };
  useEffect(() => {
    getdata();
  }, [idArray]);
  const handleClick = () => {
    navigate("/mfe/products");
  };

  return (
    <>
      <div className="dashy">
        <div className={styles.column + " " + styles.left}>
          <div className={styles.smallcardleft}>
            <button className={styles.leftbutton} onClick={handleClick}>
              <span className={styles.notifications}>
                View inhouse Products
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
            <span className={styles.analytics}>Products at MFE</span>
            <span className={styles.welcometext}>Request products</span>
          </div>

          <span className={styles.mentorrequests2}>
            All products at your center:{" "}
          </span>
          <div className={styles.cardcontainer}>
            <tr style={{ "backgroundColor": "whitesmoke" }}>
              <td><p className={styles2.cardcontent} style={{ "paddingLeft": "8rem" }}>Name</p></td>
              <td><p className={styles2.cardcontent} style={{ "paddingLeft": "16rem" }}>Quantity</p></td>
              <td><p className={styles2.cardcontent} style={{ "paddingLeft": "16rem", "paddingRight": "10rem" }}>Return to PAC</p></td>
            </tr>
            {idArray.map((id) => (
              <MFEReturnCard key={id} mentid={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MFEReturn;
