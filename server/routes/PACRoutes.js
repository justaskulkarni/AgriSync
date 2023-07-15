if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');

const PAC = require('../models/PAC')
const Request = require('../models/request')

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

        const requser = await PAC.findOne({ email: req.body.email })

        if (!requser) {
            throw Error('Incorrect Email')
        }

        const match = await bcrypt.compare(req.body.password, requser.password)

        if (!match) {
            throw Error('Password is incorrect')
        }
        else {
            const token = createToken(requser._id, "PAC")
            res.json({ success: true, authToken: token })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

router.post('/signup', async (req, res) => {

    try {
        if (!req.body.email || !req.body.password || !req.body.district || !req.body.state) {
            throw Error('All fields must be filled')
        }

        if (!validator.isEmail(req.body.email)) {
            throw Error('Enter a valid number')
        }

        if (!validator.isStrongPassword(req.body.password, { minLength: 8, minUppercase: 0, minSymbols: 0 })) {
            throw Error('Password not strong enough')
        }

        const salt = await bcrypt.genSalt(12)
        pass = req.body.password
        const hashp = await bcrypt.hash(pass, salt);

        const newUser = new PAC({
            email: req.body.email,
            password: hashp,
            name: req.body.name,
            district: req.body.district,
            state: req.body.state,
        })

        await newUser.save()

        const token = createToken(newUser._id, "PAC")
        res.json({ success: true, authToken: token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getall', async (req, res) => {
    try {
        const district = req.body.district;
        const requests = await Request.find({ district });

        res.json({ requests });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getall', async (req, res) => {
    try {
        const district = req.body.district;
        const requests = await Request.find({ district });

        res.json({ requests });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/grade', async (req, res) => {
    try {
        const reqid = req.body.reqid;
        const grade = req.body.grade;
        const request = await Request.findOne({ reqid });
        if (!request) {
            return res.status(404).json({ error: 'Request not found' });
          }
        
          // Update the fields
          request.graded = true;
          request.grade = grade;
        
          // Save the updated request
          await request.save();
        
          res.json({ success: true, request: request });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;