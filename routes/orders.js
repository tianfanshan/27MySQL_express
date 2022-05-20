const express = require('express');
const OrderController = require('../controllers/OrderController.js');
const router = express.Router();

// router.post('/postTableOrders',OrderController.postTableOrders);
// router.post('/postOrders',OrderController.postOrders);
router.get('/getAllProducts_Categories',OrderController.getAllProducts_Categories);
router.get('/getAllProducts_CategoriesWithId/:id',OrderController.getAllProducts_CategoriesWithId);

module.exports = router;