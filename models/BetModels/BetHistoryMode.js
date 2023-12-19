const mongoose = require("mongoose");

const betHistoryModelSchema = new mongoose.Schema({
    UserId:{
        type:String
    },
    DemoId: {
        type: Number,
        default: 1
    },
    BettingNumber:{
        type:Number,
        required:true
    },
    Status:{
        type:String
    },
    Amount:{
        type:Number
    },
    Betting_time:{
        type: Date,
        required: true,
        default: Date.now
    }

});

const betHistoryModel = mongoose.model("BetHistoryModel", betHistoryModelSchema);

module.exports = betHistoryModel;