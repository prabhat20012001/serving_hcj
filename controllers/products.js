// ../controllers/products.js

// Import the path module
const path = require('path');

// Define getProducts function
const getProducts = (req, res) => {
    // Handle logic to fetch products
    // Send response
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};

// Export getProducts function
module.exports = {
    getProducts
};
