const mongoose = require("mongoose");

const betModelSchema = new mongoose.Schema({
  
    GameId: {
        type: String
    },
    DemoId: {
        type: Number,
        default: 1
    },
    BettingNumber:{
        type:Number,
        required:true
    },
    BetType:{
        type:String
    },
    UserBalance: {
        type: Number,
        default: 20000
    },
    DebitAmount:{
        type:Number
    },
    Betting_time:{
        type: Date,
        required: true,
        default: Date.now
    }

});

const betModel = mongoose.model("BetModel", betModelSchema);

module.exports = betModel;