import { useState } from "react";
import GradedCard from "../components/GradedCard";
import { useEffect } from "react";
import styles from "../stylesheets/pacdashboard.module.css";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Home.css";
const PACDashboard = () => {
  let navigate = useNavigate();
  const [idArray, setIdArray] = useState([]);

  const getdata = async () => {
    const response = await fetch(
      "http://localhost:6100/api/pac/getallgraded/Thane",
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
  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };
  const handleClick = () => {
    navigate("/pac/dashboard");
  };
  return (
    <>
      <div className="dashy">
        <div className={styles.column + " " + styles.left}>
          <div className={styles.smallcardleft}>
            <button className={styles.leftbutton}>
              <span className={styles.notifications} onClick={handleClick}>
                Grade requests
              </span>
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
            <span className={styles.analytics}>All Graded requests</span>
            <span className={styles.welcometext}>
              View all graded requests at the PAC available to MFEs
            </span>
          </div>

          <span className={styles.mentorrequests2}>All graded requests : </span>
          <div className={styles.cardcontainer}>
            {idArray.map((id) => (
              <GradedCard key={id} mentid={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PACDashboard;
