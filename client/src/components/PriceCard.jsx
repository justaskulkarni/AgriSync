import React, { useState, useEffect } from 'react'
import styles from '../stylesheets/card.module.css'

const PriceCard = ({ itemid }) => {
    const [credentials, setCredentials] = useState({ name: "", price: "" })
    const [price, setPrice] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const handlePrice = (e) => {
        e.preventDefault();
        setIsOpen(true)
    };
    const handleClose = (e) => {
        e.preventDefault()
        setIsOpen(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:6100/api/pac/updateprice/${itemid}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPrice: price }),
      });
      window.location.reload();
    }
    const onChange = (e) => {
        const { value } = e.target
        setPrice(value)
    }
    useEffect(() => {
        const getdata = async () => {
            const response = await fetch(`http://localhost:6100/api/pac/getprice/${itemid}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            const json = await response.json()
            if (json.success) {
                setCredentials({ name: json.data.name, price: json.data.price })
            }
        }
        getdata()
    }, [])

    return (
        <div className={styles.cardstyle}>
            <div className={styles.statscontainer}>
                <div className={styles.innerdiv}>
                    <div className={styles.innermost1}>
                        <p className={styles.cardcontent}>Name of Commodity: {credentials.name}</p>
                        <p className={styles.cardcontent}>Price: {credentials.price}</p>
                        <p className={styles.cardcontent}><button onClick={handlePrice} className='btn btn-dark'>Change Price</button></p>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className={styles.popupcontainer}>
                    <div className={styles.popup}>
                        <p className={styles.cardcontent}>New Price: <input type="string" value={price} name="price" onChange={onChange} /></p>
                        <button onClick={handleSubmit} style={{ marginTop: '3.5rem', backgroundColor: '#ff9900', color: '#ffffff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} >Confirm New Price</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PriceCard