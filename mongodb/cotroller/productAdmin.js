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