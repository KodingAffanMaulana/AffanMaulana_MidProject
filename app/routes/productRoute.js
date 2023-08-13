const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// router.get('/', productController.getAllProducts);
router.get('/', productController.getProduct);
//bonus
router.post('/', productController.createProduct);
router.get('/title', productController.searchProduct);

module.exports = router;