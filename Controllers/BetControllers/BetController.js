const BetModel=require("../../models/BetModels/BetModel.js");
const betHistoryModel=require("../../models/BetModels/BetHistoryMode.js");

class BetController{

    static onPlayBet=async(req,res)=>{
        try{
            let newBet=new BetModel({
                GameId:req.body.gameid,
                DemoId:req.body.demoid,
                BettingNumber:req.body.bettingnumber,
                BetType:req.body.bettype,
                UserBalance:"20000",
                DebitAmount:req.body.debitamount
            });
           let savedBet=await newBet.save();
           if(savedBet){
            return res.json({BetSaved:true,Bet:savedBet,somethingwrong:false})
           }else{
            return res.json({BetSaved:false,Bet:null,somethingwrong:true})
           }
        }
        catch(error){
            console.log(error);
            return res.json({BetSaved:false,Bet:null,somethingwrong:true})
        }
        res.json({betstor:true})
    }

    // on user win the bet
    static onBetWin=async(req,res)=>{
        try{
          
        }catch(error){
          
        }
    }

}

module.exports=BetController;