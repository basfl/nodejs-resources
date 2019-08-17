const mongodb = require('mongodb')
const getDb = require("../util/database").getDb

class Product {
    constructor(title, description, price, imageUrl) {
        this.title = title
        this.description = description
        this.price = price
        this.imageUrl = imageUrl

    }
    save() {

        const db = getDb()

        return db.collection("products").insertOne(this).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        })
    }
    static fetchAll() {
        const db = getDb();
        return db
            .collection('products')
            .find()
            .toArray()
            .then(products => {
                console.log(products);
                return products;
            })
            .catch(err => {
                console.log(err);
            });
    }
    static getOne(prodId) {
        const db = getDb()
        return db.collection('products')
            .find({ "_id": new mongodb.ObjectID(prodId) })
            .next().
            then(product => {
                return product
            }).catch(err => {
                console.log(err)
            })

    }
}

module.exports = Product