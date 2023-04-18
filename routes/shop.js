// Import dependencies
const express = require('express');
const productsController = require('../controllers/products');

// Create router object
const router = express.Router();

// Define route with callback function
router.get('/', productsController.getProducts);

// Export router object
module.exports = router;
