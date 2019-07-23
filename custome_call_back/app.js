const fs = require('fs')
const path = require('path');
const p = path.join(__dirname, 'data', 'data.json')
console.log(p)

const getProductsFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {

            callback(JSON.parse(fileContent));
        }
    });
};
const findOne = (id, callback) => {
    getProductsFromFile(products => {
        const product = products.find(p => p.id = id)
        callback(product)
    })
}

getProductsFromFile(products => {
    console.log("got result back from getProductsFromFile ")
    console.log(products)

})
console.log("dont wait go ahead until we get result from getProductsFromFile")
findOne("123", product => {
    console.log("got result back fromfindOne")
    console.log(product)
})
console.log("dont wait go ahead until we get result from findOne")

