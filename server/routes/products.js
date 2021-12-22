const router = require("express").Router();
const productController = require("../controllers/products-controller")

router.post('/createProduct', productController.createProduct)


module.exports = router;