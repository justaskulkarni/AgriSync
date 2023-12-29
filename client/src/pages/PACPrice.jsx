import { useState } from "react";
import PriceCard from "../components/PriceCard";
import { useEffect } from "react";
import styles from "../stylesheets/pacdashboard.module.css";
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
          <div className={styles.cardcontainer}>
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
