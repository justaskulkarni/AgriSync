import React, { useState, useEffect } from 'react'
import styles from '../stylesheets/card.module.css'

const GradedCard = ({mentid}) => {

  const [credentials, setCredentials] = useState({ name: "", quantity: ""})

  useEffect(() => {
    const getdata = async() =>{

      const response = await fetch(`http://localhost:6100/api/pac/lasttry/${mentid}`, {
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
    <>
    {/* <div className={styles.cardstyle}>
      <div className={styles.statscontainer}>
        <div className={styles.innerdiv}>
            <div className={styles.innermost1}>
              <p className={styles.cardcontent}>Name of Commodity: {credentials.name}</p>
              <p className={styles.cardcontent}>Quantity: {credentials.quantity}</p>
              <p className={styles.cardcontent}>Grade: {credentials.grade}</p>
            </div>
        </div>
      </div>
    </div> */}
      <tr style = {{ "backgroundColor": "whitesmoke"}}>
        <td><p className={styles.cardcontent} style={{ "paddingLeft": "8rem" }}>{credentials.name}</p></td>
        <td><p className={styles.cardcontent} style={{ "paddingLeft": "18rem" }}>{credentials.quantity}</p></td>
        <td><p className={styles.cardcontent} style={{ "paddingLeft": "18rem", "paddingRight": "8rem" }}>{credentials.grade}</p></td>
      </tr>
    </>
  )
}

export default GradedCard