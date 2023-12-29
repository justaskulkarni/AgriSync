if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');

const Request = require('../models/request')
const Price = require('../models/price')
const router = express.Router()

router.post('/getsellingprice', async(req, res) =>{
    try {
        const item = req.body.name
        let quantity = req.body.quantity
        const data = await Price.findOne({ name: item });
        let price = parseInt(data.price, 10);
        quantity = parseInt(quantity, 10)
        price = price * quantity     
        console.log(price)
        res.json({ success: true, price })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/postreq', async (req, res) => {

    try {
        if (!req.body.name || !req.body.quantity || !req.body.district || !req.body.district) {
            throw Error('All fields must be filled')
        }

        const newUser = new Request({
            name: req.body.name,
            quantity: req.body.quantity,
            district: req.body.district
        })

        await newUser.save()
        console.log(newUser)
        res.json({ success: true })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;