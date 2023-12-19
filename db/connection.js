const mongoose=require("mongoose");
const connect=async()=>{
   await mongoose.connect("mongodb://127.0.0.1:27017/Roulette", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log(`database connected successfully`)
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports=connect;