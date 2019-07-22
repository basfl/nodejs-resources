const moment = require('moment')
const logger = (req, resp, next) => {
    console.log("*********************\n", req.protocol, "://", req.get('host') + req.originalUrl, " at: ", moment().format())
    next()
}
module.exports = logger