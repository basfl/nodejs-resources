const express = require('express')
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const routes = require("./routes/routes")
const csrf = require('csurf');

const app = express()
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
  secret: 'keyboard cat',
  resave: false, 
  saveUninitialized: false,
  store: new FileStore,
  cookie: { maxAge: 3600000, secure: false, httpOnly: true }
})
);
app.use(csrfProtection);
 

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.token = req.csrfToken();
  console.log("here is csrf-> ", req.csrfToken());
  console.log("here is csrf-> ", res.locals.isAuthenticated); 
  // res.locals.csrfToken
  next(); 
});



app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("servers start running on port ", PORT)
})
