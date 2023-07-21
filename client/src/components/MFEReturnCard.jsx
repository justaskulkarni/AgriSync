import React, { useState, useEffect } from 'react'
import styles from '../stylesheets/card.module.css'

const MFEReturnCard = ({mentid}) => {

  const handleGrade = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:6100/api/mfe/return/${mentid}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    
  };
  
  const [credentials, setCredentials] = useState({ name: "", quantity: "", grade: ""})

  useEffect(() => {
    const getdata = async() =>{

      const response = await fetch(`http://localhost:6100/api/mfe/getbyid/${mentid}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
  
      const json = await response.json()
      if(json.success)
      {
        setCredentials({name: json.data.name, quantity: json.data.quantity, grade: json.data.grade})

      }
  
  
    }

    getdata()
  },[])

  

  return (
    <div className={styles.cardstyle}>
      <div className={styles.statscontainer}>
        <div className={styles.innerdiv}>
            <div className={styles.innermost1}>
              <p className={styles.cardcontent}>Name of Commodity: {credentials.name}</p>
              <p className={styles.cardcontent}>Quantity: {credentials.quantity}</p>
              <p className={styles.cardcontent}><button onClick={handleGrade}>Return to PAC</button></p>
            </div>
        </div>
      </div>
    </div>  
  )
}

export default MFEReturnCard;