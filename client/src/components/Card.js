import React, { useState, useEffect } from 'react'
import styles from '../stylesheets/card.module.css'

const Card = ({mentid}) => {


  const handleGrade = (e) => {
    e.preventDefault();
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const [credentials, setCredentials] = useState({ name: "", quantity: ""})

  useEffect(() => {
    const getdata = async() =>{

      const response = await fetch(`http://localhost:6100/api/pac/getbyid/${mentid}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
  
      const json = await response.json()
      if(json.success)
      {
        console.log(json.data)
        setCredentials({name: json.data.name, quantity: json.data.quantity})

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
              <p className={styles.cardcontent}><button onClick={handleGrade}>Grade</button></p>
            </div>
        </div>
      </div>
    </div>  
  )
}

export default Card