const express=require("express");
const BetController=require("../../Controllers/BetControllers/BetController.js")
const router=express.Router();

router.post("/play-bet",BetController.onPlayBet)
router.post("/win",BetController.onBetWin);

module.exports=router;