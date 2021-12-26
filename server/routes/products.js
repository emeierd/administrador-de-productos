const router = require("express").Router();
const productController = require("../controllers/products-controller")

router.post('/createProduct', productController.createProduct)
router.get('/getAll', productController.getAll)
router.get('/:id', productController.get)
router.post('/:id/edit', productController.edit)
router.post('/:id/remove', productController.remove)

module.exports = router;