const fs = require('fs');
const express = require('express');
const app = express();
const router = new express.Router();
//Aim: With the help of router, get all the product with router.GET request and create a product with router.POST request

//middleware
//write router middleware here
router.use(express.json());

//Including product.json file
const product = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/product.json`)
);

// Defining The Router
// Get all the products
router.get('/api/v1/product', (req, res) => {
  try {
    //Write your code here
    res.status(200).json({
      status: "success",
      results: product.length,
      data: {
        product: product,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

//Create a new Product
router.post('/api/v1/product', (req, res) => {
  try {
    //Write your code here
    const { title, price } = req.body;
    if (!title || !price) {
      return res.status(404).json({
        message: "Title and price are required",
        status: "Error",
      });
    }
    const newId = product[product.length - 1].id + 1;
    const newProduct = { id: newId, title, price };
    product.push(newProduct);
    fs.writeFile(`${__dirname}/../dev-data/product.json`,
      JSON.stringify(product),
      (err) => {
        if (err) {
          return res.status(500).json({
            message: "Error creating product",
            status: "Error",
          });
        }
        res.status(201).json({
          status: "Success",
          data: {
            product: newProduct,
          },
        });
      }
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

//Registering our Router
//Write here to register router
app.use(router);

module.exports = app;
