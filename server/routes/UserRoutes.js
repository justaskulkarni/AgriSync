if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');

const User = require('../models/user')

const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken');

const router = express.Router()

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.SECRET, {
        expiresIn: 3 * 24 * 60 * 60
    });
}

router.post('/login', async (req, res) => {

    try {

        if (!req.body.email || !req.body.password) {
            throw Error('All fields must be filled')
        }

        const requser = await User.findOne({ email: req.body.email })

        if (!requser) {
            throw Error('Incorrect Email')
        }

        const match = await bcrypt.compare(req.body.password, requser.password)

        if (!match) {
            throw Error('Password is incorrect')
        }
        else {
            const token = createToken(requser._id, "User")
            res.json({ success: true, authToken: token })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

router.post('/signup', async (req, res) => {
    try {
        
        
        console.log("hi1")
        const salt = await bcrypt.genSalt(12)
        pass = req.body.password
        const hashp = await bcrypt.hash(pass, salt);
        console.log("hi2")
        const newUser = new User({
            email: req.body.email,
            password: hashp,
            name: req.body.name
        })
        console.log("hi3")
        await newUser.save()

        const token = createToken(newUser._id, "User")
        res.json({ success: true, authToken: token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;