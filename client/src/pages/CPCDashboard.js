import { useState } from "react";
import AllRequestsCard from "../components/AllRequestsCard"
import { useEffect } from "react";
import styles from "../stylesheets/pacdashboard.module.css";
import { useNavigate } from "react-router-dom";
const CPCDashboard = () => {
    let navigate = useNavigate();
    const [idArray, setIdArray] = useState([]);
    
	const getdata = async () => {
        
        const response = await fetch("http://localhost:6100/api/mfe/all", {
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
            <div className={styles.column + " " + styles.left}>
                
                {localStorage.getItem("Token") && <button className={styles.logoutbtn} onClick={handleLogout}><span className={styles.welcometext2}>Logout</span></button>}
            </div>
            <div className={styles.column + " " + styles.middle}>

                <div className={styles.leftbox}>
                    <span className={styles.analytics}>All requests</span>
                    <span className={styles.welcometext}>Track requests in the state agricultural chain of your state</span>
                </div>

                <span className={styles.mentorrequests2}>All requests : </span>
                <div className={styles.cardcontainer}>
                    {idArray.map((id) => <AllRequestsCard key={id} mentid={id} />)}
                </div>
            </div>
        </>
    );
};

export default CPCDashboard;
