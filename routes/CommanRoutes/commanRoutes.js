const express=require("express");
const router=express.Router();
const CommanController=require("../../Controllers/CommanControllers/CommanController.js")

router.get("/random-number",CommanController.generateNumber)


module.exports=router;