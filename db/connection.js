const mongoose=require("mongoose");
const connect=async()=>{
   await mongoose.connect("mongodb+srv://shafisadique123:shafisadique123@cluster0.brlacya.mongodb.net/Roulatte?ssl=true&tls=true", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log(`database connected successfully`)
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports=connect;