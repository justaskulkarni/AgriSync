if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');



const MFE = require('../models/MFE')
const Request = require('../models/request')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const razorpay = require('razorpay')
const crypto = require('crypto')

const router = express.Router()

// const instance = new razorpay({
//     key_id: process.env.RAZORPAY_API_KEY,
//     key_secret: process.env.RAZORPAY_API_SECRET,
//   });

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

router.get('/alltostate', async (req, res) => {
    try {
        const data = await Request.find({status: "SentToState"});

        res.json({ success: true, data: data }); 
        

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getallgradedandnotreq/:id', async (req, res) => {
    try {
        const district = req.params.id;
        const data = await Request.find({ district, graded: true, status: "NotTaken" });

        res.json({ success: true, data: data });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post("/orders", async (req, res) => {
    try {
        console.log(req.body.amount)
        const instance = new razorpay({
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET,
      });
  
      const options = {
        amount: 100*150, // Assuming req.body contains the correct data
        currency: "INR",
        // receipt: crypto.randomBytes(10).toString("hex"),
      };
  
      instance.orders.create(options, (error, order) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Something Went Wrong!" });
        }
        console.log(order);
        res.status(200).json({ data: order });
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error!" });
      console.log(error);
    }
  });
  

router.post("/verify", async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.RAZORPAY_API_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});


// // checkout api
// router.post("/checkout",async(req,res)=>{

//     const options ={
//         amount:Number(req.body*100),
//         currency:"INR",
//     };
//     const order = await instance.orders.create(options);
//     console.log(order);
//     res.status(200).json({
//         success:true,order
//     })

// })

// // payemnt verification
// router.post("/paymentverification",async(req,res)=>{
//     const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
//     const body = razorpay_order_id + "|" +razorpay_payment_id;
//     const expectedsgnature =crypto.createHmac('sha256',process.env.RAZORPAY_API_SECRET).update(body.toString()).digest('hex')
//     const isauth = expectedsgnature === razorpay_signature;
//     if(isauth){
//      await Payment.create({
//          razorpay_order_id,razorpay_payment_id,razorpay_signature 
//      })
//      res.redirect(`http://localhost:3000/api/mfe/paymentsuccess?reference=${razorpay_payment_id}`)
//     }
//     else{
//      res.status(400).json({success:false});
//     }
//  })
 
 
 

module.exports = router;