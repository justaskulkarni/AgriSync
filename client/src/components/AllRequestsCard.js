import React, { useState, useEffect } from 'react'
import styles from '../stylesheets/card.module.css'

const AllRequestsCard = ({mentid}) => {

  const [credentials, setCredentials] = useState({ name: "", quantity: ""})

  useEffect(() => {
    const getdata = async() =>{

      const response = await fetch(`http://localhost:6100/api/mfe/all`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
  
      const json = await response.json()
      if(json.success)
      {
        console.log(mentid)
        console.log(json)
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
              <p className={styles.cardcontent}>Grade: {credentials.grade}</p>
            </div>
        </div>
      </div>
    </div>  
  )
}

export default AllRequestsCard