
const Product = require('../model/product')
exports.getAll = (req, res, next) => {
    Product.findAll().then(products => {
        products.forEach(element => {
            const value = JSON.stringify(element.dataValues)
            res.send(JSON.parse(value))
        });

    }).catch(err => {
        console.log(err)
    })
}

exports.getOne = (req, res, next) => {
    const productId = req.params.id
    // const value
    Product.findByPk(productId).then(result => {
        if (result === null) {
            console.log("empty")
            res.send("Sorry this id does not exist!!!")
        } else {
            const value = JSON.stringify(result.dataValues)
            console.log("->value", value)
            res.send(value)
        }

    }).catch(err => {
        console.log(err)
    })
    // console.log("id",productId)
    //  res.send(productId)

}