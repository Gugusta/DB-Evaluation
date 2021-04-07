const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/product', productController.Insert);
router.get('/product', productController.SelectAll);
router.get('/product/:id', productController.SelectDetail);
router.put('/product/:id', productController.Update);
router.delete('/product/:id', productController.Delete);

module.exports = router;