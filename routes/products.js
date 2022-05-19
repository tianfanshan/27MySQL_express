const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

// router.post('/postTableProducts',ProductController.postTableProducts);
// router.post('/postProducts',ProductController.postProducts);
router.put('/putProducts/:id',ProductController.putProducts);
router.get('/getAllProducts',ProductController.getAllProducts);
router.get('/getProductsDesc',ProductController.getProductsDesc);
router.get('/getProductsWithProducts_name',ProductController.getProductsWithProducts_name);
router.delete('/deleteProductsWithProducts_name',ProductController.deleteProductsWithProducts_name);

module.exports = router
