const express = require('express')
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const routes = require("./routes/routes")


const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new FileStore,
  cookie: { maxAge: 3600000, secure: false, httpOnly: true }
})
);

app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("servers start running on port ", PORT)
})
