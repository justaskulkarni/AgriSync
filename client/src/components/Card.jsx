import React, { useState, useEffect } from 'react'
import styles from '../stylesheets/card.module.css'

const Card = ({mentid}) => {

  const [grade, setGrade] = useState(0)
  const handleGrade = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:6100/api/pac/grade/${mentid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grade: grade,
      }),
    });
    
  };
  const onChange = (event) => {
    const { value } = event.target;
    setGrade(parseInt(value, 10));
    
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
              <p className={styles.cardcontent}>Grade: <input type="number" value={grade} name="grade" onChange={onChange} className={styles.grade} placeholder="Grade" /></p>
              <p className={styles.cardcontent}><button onClick={handleGrade} className='btn btn-dark'>Confirm Grade</button></p>
            </div>
        </div>
      </div>
    </div>  
  )
}

export default Card