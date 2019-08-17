const express = require("express")
const productsAdmin = require('../cotroller/productAdmin')
const router = express.Router();

router.get("/products", productsAdmin.getAll)
router.post("/add-product", (req, res, next) => {

})

module.exports = router