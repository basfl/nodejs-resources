const fs = require("fs")
const path = require("path")

//create a dir
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//     if (err) throw err
//     console.log("folder created")

// })
// create and write to file ////
fs.writeFile(path.join(__dirname, 'test', 'temp.txt'), "this is a test", err => {
    if (err) throw err
    console.log("file has been created !!!")
    // to append inside the call back
    fs.appendFile(path.join(__dirname, 'test', 'temp.txt'), "\n i dont think i like node ", err => {
        if (err) throw err
        console.log("file has been appended")
    })
})
// reading
fs.readFile(path.join(__dirname, 'test', 'temp.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log("the content of the file is ", data)
})

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'temp.txt'),
    path.join(__dirname, '/test', 'hello.txt'),
    err => {
      if (err) throw err;
      console.log('File renamed...');
    }
  );