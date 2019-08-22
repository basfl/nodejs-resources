const fs = require('fs')
const path = require('path');
var Promise = require('promise');

// console.log(p)
//var myPromise = new Promise
var userDetails;
initialize = (p) => {

    // Return new promise 
    return new Promise((resolve, reject) => {

        ////////////////////////
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                reject([]);
            } else {

                resolve(JSON.parse(fileContent));
            }
        });

        //////////////////////////


    })
}
const p = path.join(__dirname, 'data', 'data.json')
initialize(p).then(data => {
    console.log("****", data)
}).catch(err => {
    console.log("^^^^^^^^")
})




//readingPromise(path.join(__dirname, 'data', 'data.json'))
//.then(data=>{
//})


// readingPromise(path.join(__dirname, 'data', 'data.json')).then(data=>{
//     console.log("***data",data)
// }).catch(err=>{
//     console.log("**error",err);

// })
