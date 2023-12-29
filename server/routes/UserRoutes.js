if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const User = require('../models/user')
const Otp = require('../models/otp')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken');
const otpgen = require('otp-generators')
const Mailjet = require('node-mailjet')
const nodemailer = require('nodemailer');
const router = express.Router()
const mailjet = new Mailjet.apiConnect(process.env.MJ_PUBLIC, process.env.MJ_SECRET)
const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.SECRET, {
        expiresIn: 3 * 24 * 60 * 60
    });
}

toEmail = "dcadityakulkarni@gmail.com"
toName = "Aditya Kulkarni"
subject = "OTP"
htmlContent = "<p>This is a test email.</p>"
textContent = "This is a test email."

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dcadityakulkarni@gmail.com',
        pass: 'bhof swps nttr qzky',
    },
});

router.post('/send-email', async (req, res) => {
    try {
        
        const email = req.body.email
        const genotp = otpgen.generate(6, { alphabets: false, upperCase: false, specialChar: false })
        const newUser = new Otp({
            email: email,
            otp: genotp,
        });

        await newUser.save();

        const mailOptions = {
            from: 'dcadityakulkarni@gmail.com',
            to: email,
            subject: subject,
            html: `<p>OTP: ${genotp}</p>`,
            text: `OTP: ${genotp}`,
        };

        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully');
        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {

    try {

        if (!req.body.email || !req.body.password) {
            throw Error('All fields must be filled')
        }

        const requser = await User.findOne({ email: req.body.email })

        if (!requser) {
            throw Error('Incorrect Email')
        }

        else {
            const token = createToken(requser._id, "User")
            res.json({ success: true, authToken: token })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

router.post('/sendotp', async (req, res) => {
    try {
        const email = req.body.email
        const genotp = otpgen.generate(6, { alphabets: false, upperCase: false, specialChar: false })
        const newUser = new Otp({
            email: email,
            otp: genotp,
        });

        await newUser.save();
        const request = mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: 'dcadityakulkarni@gmail.com',
                        Name: 'Aditya Kulkarni',
                    },
                    To: [
                        {
                            Email: toEmail,
                            Name: toName,
                        },
                    ],
                    Subject: subject,
                    HTMLPart: htmlContent,
                    TextPart: textContent,
                },
            ],
        });

        const response = await request;
        res.json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/verify', async (req, res) => {
    try {
        const otp = req.body.otp;
        console.log(otp)
        // Find the user by email
        const user = await Otp.findOne({ otp });
        console.log(user.otp, user.otp == otp)   
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Check if the provided OTP matches the saved OTP
        if (user.otp != otp) {
            return res.status(401).json({ success: false, message: 'Invalid OTP' });
        }

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
        console.log(newUser)
        const token = createToken(newUser._id, "User")
        res.json({ success: true, authToken: token })
    } catch (error) {
        console.error('Error during OTP verification:', error);
        res.status(500).json({ error: error.message });
    }
});

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