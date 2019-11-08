const flash = require('connect-flash');

module.exports=(req,res,next)=>{
    console.log("middleware**************");
    req.flash( 'for', 'everyone');
    next();
}