const express = require('express')
const Product = require('../model/product')
const route = express.Router()

route.get('/product/:id', (req, res, next) => {
    const id = req.params.id
    // const result
    Product.findById(id).then(result => {
        res.send(result)
    }).catch(err => {
        console.log(err)
    })

})

route.post("/product", (req, res, next) => {
    const title = req.body.title
    const price = req.body.price;
    const des = req.body.description
    const image = req.body.imageUrl
    console.log("888", req.body)
    const product = new Product({
        title: title,
        price: price,
        description: des,
        imageUrl: image
    })
    product.save().then(result => {
        //  console.log(result)
        res.send(res.status)
    }).catch(err => {
        console.log(err)
    })
})

route.post("/product/update/:id", (req, res, next) => {
    const id = req.params.id
    const title = req.body.title
    console.log("**updateed id=", id, " and title is ", title)
    // Product.findByIdAndUpdate
    // Product.updateOne({ _id: id }, { $set: { title: title } })
    console.log("*updateed id=", id, " and title is ,", title)
    const filter = { _id: id };
    const update = { title: title };
    Product.findOneAndUpdate(filter, update, {
        new: true
    }).then(response => {
        console.log("response", response)
        res.send(response)
    }).catch(err => {
        console.log(err)
    })
})

route.post("/product/remove/:id", (req, res, next) => {
    const id = req.params.id

    Product.findByIdAndRemove(id).then(response => {
        res.send(response)
    }).catch(err => {
        console.log(err)
    })
})
module.exports = route