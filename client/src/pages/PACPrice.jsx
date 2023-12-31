import { useState } from "react";
import PriceCard from "../components/PriceCard";
import { useEffect } from "react";
import styles from "../stylesheets/pacdashboard.module.css";
import styles2 from "../stylesheets/card.module.css"
import { useNavigate } from "react-router-dom";
import "../stylesheets/Home.css";
const PACPrice = () => {
  let navigate = useNavigate();
  const [idArray, setIdArray] = useState([]);
  const handleClick = () => {
    navigate("/pac/viewgraded");
  };
  const getdata = async () => {
    const response = await fetch("http://localhost:6100/api/pac/getprice", {
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
  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <>
      <div className="dashy">
        <div className={styles.column + " " + styles.left}>
          <div className={styles.smallcardleft}>
            <button className={styles.leftbutton}>
              <span className={styles.notifications}>Grade requests</span>
            </button>
            <button className={styles.leftbutton}>
              <span className={styles.notifications} onClick={handleClick}>
                At PAC
              </span>
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
            <span className={styles.analytics}>Commodity Prices</span>
            <span className={styles.welcometext}>
              View or Change the Prices of commodities
            </span>
          </div>
          <div className={styles.cardcontainer}>
            <span className={styles.mentorrequests2}>All available commodities : </span>
            <tr style={{ "backgroundColor": "whitesmoke" }}>
                <td><p className={styles2.cardcontent} style = {{ "paddingLeft": "8rem", "width": "100px"}}>Name</p></td>
                <td><p className={styles2.cardcontent} style={{ "paddingLeft": "18rem" }}>RS</p></td>
                <td><p className={styles2.cardcontent} style={{ "paddingLeft": "18rem", "paddingRight": "8rem" }}>Change Price</p></td>
            </tr>
            {idArray.map((id) => (
              <PriceCard key={id} itemid={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PACPrice;
