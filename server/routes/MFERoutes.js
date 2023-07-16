if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');

const MFE = require('../models/MFE')
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
        console.log("hi");
        if (!req.body.email || !req.body.password || !req.body.state||!req.body.district) {
            throw Error('All fields must be filled')
        }

        if (!validator.isEmail(req.body.email)) {
            throw Error('Enter a valid number')
        }

        if (!validator.isStrongPassword(req.body.password,{minLength : 8, minUppercase : 0, minSymbols:0})) {
            throw Error('Password not strong enough')
        }

        const salt = await bcrypt.genSalt(12)
        pass = req.body.password
        const hashp = await bcrypt.hash(pass, salt);

        const newUser = new MFE({
            email: req.body.email,
            password: hashp,
            name: req.body.name,
            district:req.body.district,
            state:req.body.state,
        })

        await newUser.save()

        const token = createToken(newUser._id, "MFE")
        res.json({ success: true, authToken: token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getallgraded/:id', async (req, res) => {
    try {
        const district = req.params.id;
        const data = await Request.find({ district, graded: true });

        res.json({ success: true, data: data }); 
        

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getalltaken', async (req, res) => {
    try {
        const data = await Request.find({ mfetaken: true });

        res.json({ success: true, data: data }); 
        

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getbyid/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Request.findById(id)

        res.json({ success: true, data: data });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getbyidnew/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Request.findOne({_id: id, mfetaken: false})

        res.json({ success: true, data: data });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/request/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Request.findById(id)
        data.mfetaken = true;
        data.status = "Taken";
        await data.save();
        console.log(data)
        res.json({ success: true, data: data });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/return/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Request.findById(id)
        data.mfetaken = true;
        data.status = "Returned";
        await data.save();
        console.log(data)
        res.json({ success: true, data: data });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const data = await Request.find();

        res.json({ success: true, data: data }); 
        

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;