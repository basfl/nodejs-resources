const express = require("express")
const productsAdmin = require('../cotroller/productAdmin')
const router = express.Router();

router.get("/products", productsAdmin.getAll)
router.get("/product/:id", productsAdmin.getOne)
router.post("/add-product", (req, res, next) => {

})

module.exports = router