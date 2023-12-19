const generateUniqueId = require('generate-unique-id');
const demouserModel=require("../../models/DemouerModels/DemouserModel.js");

class demoUserController {

    static getDemoUser =async (req, res) => {
        
        let demoUser;
        try{
            // get all demo users
            let demoUsers=await demouserModel.find();
            let previousDemoId=demoUsers.length;
            let newDemoId=previousDemoId+1;
            // create Demouser Object
            let newDemoUser=new demoUserModel({
                Username:"Demouser"+newDemoId,
                DemoId:newDemoId,
                GameId:"Roulette@"
            });
            // save the new demou user in Demouser Model
            demoUser=await newDemoUser.save();
            if(demoUser){
              return  res.json({demoUserCreated:true,user:demoUser,somethinwrong:false})
            }else{
              return  res.json({demoUserCreated:false,user:null,somethinwrong:true})
            }
        }
        catch(error){
            console.log(error);
            return res.json({demoUserCreated:false,user:null,somethinwrong:true})
        }
    }
}

module.exports = demoUserController;