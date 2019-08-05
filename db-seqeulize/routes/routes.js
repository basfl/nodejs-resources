const express=require('express')
const productController=require("../controller/product")
const router=express.Router()
router.get("/get/all",productController.getAll)
router.get("/get/one/:id",productController.getOne)
router.post("/add-product",productController.postAddProduct)
module.exports=router