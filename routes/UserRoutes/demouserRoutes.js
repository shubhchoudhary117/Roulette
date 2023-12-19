const express=require("express");
const router=express.Router();
const demoUserController=require("../../Controllers/UserControllers/demoUserController.js")

router.get("/get",demoUserController.getDemoUser)


module.exports=router;