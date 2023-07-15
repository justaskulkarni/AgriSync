const express = require('express');

const vegetables = require('../models/PACtoFarmer')
const router = express.Router()
vegetables.create([
    { name: 'tomato', price: 50 },
    { name: 'potato', price: 60 },
    { name: 'chilly', price: 10 },
    {name:'onion',price:20},
    {name:'garlic',price:15},
    {name:'brinjal',price:30}
  ])
    .then(() => {
      console.log('Vegetable prices shown successfully');
    })
    .catch((error) => {
      console.error('Error showing vegetable prices:', error);
    });
router.get('/vegetables/:name', async (req, res) => {
    const { name } = req.params;
  
    try {
      const vegetables = await vegetables.findOne({ name });
      if (!vegetables) {
        res.status(404).json({ message: 'Vegetable not found' });
        return;
      }
  
      res.json({ name: vegetables.name, price: vegetables.price });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  module.exports = router;