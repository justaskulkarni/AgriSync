if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const PAC = require('../models/PAC')
const Request = require('../models/request')
const Price = require('../models/price')
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


router.get('/getall/:id', async (req, res) => {
    try {
        const district = req.params.id;
        const data = await Request.find({ district, grade: -1 });

        res.json({ success: true, data: data });

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

router.get('/getbyid/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Request.findOne({ _id: id, graded: false })

        res.json({ success: true, data: data });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/lasttry/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Request.findOne({ _id: id, graded: true })

        res.json({ success: true, data: data });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getbyidgraded/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Request.findOne({ _id: id, graded: false })

        res.json({ success: true, data: data });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/grade/:id', async (req, res) => {
    try {

        const reqid = req.params.id;
        const grade = req.body.grade;

        console.log(reqid);

        // Convert the string reqid to ObjectId
        const objectIdReqid = new mongoose.Types.ObjectId(reqid);

        const request = await Request.findOne({ _id: objectIdReqid });
        console.log(request);

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

router.delete('/delete/:id', async(req, res) => {
    try {
        const reqid = req.params.id;    
        const objectIdReqid = new mongoose.Types.ObjectId(reqid);
        const request = await Request.deleteOne({ _id: objectIdReqid });
        res.json({ success: true })
    } catch (error) {
        res.status(400).json({ error: error.message })     
    }
})

router.post('/updateprice/:id', async(req, res) =>{
    try {
        console.log('hi')
        const id = req.params.id
        const newPrice = req.body.newPrice
        console.log(newPrice)
        const objectIdReqid = new mongoose.Types.ObjectId(id)
        const item = await Price.findOne({ _id: objectIdReqid })
        console.log(item)
        item.price = newPrice
        await item.save()
        console.log(item)
        res.json({ success: true, data: item })
    } catch (error) {
        
    }
})

router.get('/getprice', async(req, res) =>{
    try {
        const itemPrices = await Price.find();
        res.json({ success: true, data: itemPrices})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getprice/:id', async(req, res) =>{
    try {
        const itemId = req.params.id
        const objectIdPriceid = new mongoose.Types.ObjectId(itemId);
        const price = await Price.findOne({ _id: objectIdPriceid });
        res.json({ success: true, data: price })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;