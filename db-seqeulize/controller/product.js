
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

}
exports.postAddProduct = (req, res, next) => {
    console.log("inside___>")
    // const title = req.query.title;
    // const imageUrl = req.query.imageUrl;
    // const price = req.query.price;
    // const description = req.query.description;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    console.log("inside___>",title,imageUrl,price,description)
    Product.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    
      }).then(result => {
        //  console.log(result)
        console.log("created product")
        res.send("created product")
      //  res.redirect('/admin/products');
      }).catch(err => {
        console.log(err)
      })

}