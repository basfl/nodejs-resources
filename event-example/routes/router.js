const express=require("express");
const eventEmiiter=require("events");
const emmiter=new eventEmiiter();
const router=express.Router();
router.get("/getData",(req,res,next)=>{
    console.log("**************************8")
   emmiter.on("action",data=>{
       console.log("------",data);
   })
});
module.exports=router;