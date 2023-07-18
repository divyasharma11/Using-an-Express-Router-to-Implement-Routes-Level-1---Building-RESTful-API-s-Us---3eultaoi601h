const fs = require('fs');
const express = require('express');
const app = express();
//Aim: With the help of router, get all the product with router.GET request and create a product with router.POST request

//middleware
//write router middleware here

//Including product.json file
const product = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/product.json`)
);

// Defining The Router
// Get all the products
router.get('/api/v1/product', (req, res) => {
  try {
    //Write your code here
  } catch (error) {
    res.status(400).json(error);
  }
});

//Create a new Product
router.post('/api/v1/product', (req, res) => {
  try {
    //Write your code here
  } catch (error) {
    res.status(400).json(error);
  }
});

//Registering our Router
//Write here to register router

module.exports = app;
