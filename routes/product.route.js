const Product = require('../models/product.model');
const productController = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.insertProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;