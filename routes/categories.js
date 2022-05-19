const express = require('express');
const CategoryController = require('../controllers/CategoryController.js');
const router = express.Router();

// router.post('/postTableCategories',CategoryController.postTableCategories);
// router.post('/postCategories',CategoryController.postCategories);
router.put('putCategories',CategoryController.putCategories);
router.get('/getAllCategories',CategoryController.getAllCategories);
router.get('/getCategoriesWiehId',CategoryController.getCategoriesWithId);

module.exports = router;