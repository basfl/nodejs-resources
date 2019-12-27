const jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    // console.log("middleware");
    // req.p=1;
    // console.log("middleware",req.p);
    const token=req.get("token")
    console.log("test", req.get("token"));
    decodedToken = jwt.verify(token, 'somesupersupersupersecret');
    console.log("-->",decodedToken)
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
      }
    req.p=decodedToken.p;
    next();
}