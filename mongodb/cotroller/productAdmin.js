const Product = require('../modals/products')

exports.getAll = (req, res, next) => {
    Product.fetchAll().then(products => {

        console.log("**", products)
        products.forEach(product => {
            res.send(product)
        });

    }).catch(err => {
        console.log(err)
    })

}
exports.getOne = (req, res, next) => {
    const productId = req.params.id
    Product.getOne(productId).then(product => {
        console.log("one", product)
        res.send(product)
    }).catch(err => {
        console.log(err)
    })

}