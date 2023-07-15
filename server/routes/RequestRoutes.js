if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');

const Request = require('../models/request')

const router = express.Router()

router.post('/signup', async (req, res) => {

    try {
        if (!req.body.name || !req.body.quantity || !req.body.district) {
            throw Error('All fields must be filled')
        }

        const newUser = new User({
            name: req.body.name,
            quantity: req.body.quantity,
            district: req.body.district
        })

        await newUser.save()

        res.json({ success: true })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;