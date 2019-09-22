const express = require("express")
const bodyParser = require('body-parser');
const multer = require('multer')
const uuidv1 = require('uuid/v1');
const path = require("path");
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const routes = require("./routes/api");
const app = express();
//////////preparing multer 
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        console.log("filename->", uuidv1() + '-' + file.originalname)
        cb(null, uuidv1() + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        console.log("*************")
        cb(null, true);
    } else {
        cb(null, false);
    }
};
//////////////////////////////

//////////////////////////////

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new FileStore,
    cookie: { maxAge: 3600000, secure: false, httpOnly: true }
})
);

app.use((req, res, next) => {
    console.log("*****************************");
    next();
})

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/images", express.static(path.join(__dirname, 'images')));

app.use(routes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("servers start running on port ", PORT)
})