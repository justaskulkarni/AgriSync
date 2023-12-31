import React, { useState, useEffect } from 'react'
import styles from '../stylesheets/card.module.css'

const Card = ({ mentid }) => {

  const [grade, setGrade] = useState(0)
  const handleGrade = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:6100/api/pac/grade/${mentid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grade: grade,
      }),
    });

  };
  const handleDelete = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:6100/api/pac/delete/${mentid}`, {
      method: "DELETE", 
      headers: { "Content-Type": "application/json" },
    })
  }
  const onChange = (event) => {
    const { value } = event.target;
    setGrade(parseInt(value, 10));

  };
  const [credentials, setCredentials] = useState({ name: "", quantity: "" })

  useEffect(() => {
    const getdata = async () => {

      const response = await fetch(`http://localhost:6100/api/pac/getbyid/${mentid}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await response.json()
      if (json.success) {
        setCredentials({ name: json.data.name, quantity: json.data.quantity })

      }


    }

    getdata()
  }, [])



  return (
    /*<div className={styles.cardstyle}>
      <div className={styles.statscontainer}>
        <div className={styles.innerdiv}>
            <div className={styles.innermost1}>
              <p className={styles.cardcontent}>Name of Commodity: {credentials.name}</p>
              <p className={styles.cardcontent}>Quantity: {credentials.quantity}</p>
              <p className={styles.cardcontent}>Grade: <input type="number" value={grade} name="grade" onChange={onChange} className={styles.grade} placeholder="Grade" /></p>
              <p className={styles.cardcontent}><button onClick={handleGrade} className='btn btn-dark'>Confirm Grade</button></p>
            </div>
        </div>
      </div>
    </div>*/
    
      <tr style = {{ "backgroundColor": "whitesmoke"}}>
        <td><p className={styles.cardcontent} style={{ "paddingLeft": "4rem" }}>{credentials.name}</p></td>
        <td><p className={styles.cardcontent} style={{ "paddingLeft": "6rem" }}>{credentials.quantity}</p></td>
        <td><p className={styles.cardcontent} style={{ "paddingLeft": "6rem" }}><input type="number" value={grade} name="grade" onChange={onChange} className={styles.grade} placeholder="Grade" /></p></td>
        <td><p className={styles.cardcontent} style={{ "paddingLeft": "6rem" }}><button onClick={handleGrade} className='btn btn-dark'>Confirm Grade</button></p></td>
        <td><p className={styles.cardcontent} style={{ "paddingLeft": "6rem", "paddingRight": "4rem" }}><button onClick={handleDelete} className='btn btn-dark'>Discard Product</button></p></td>
      </tr>
    
  )
}

export default Card