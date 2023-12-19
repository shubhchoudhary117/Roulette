const express=require("express");
const cors=require("cors");
const commanRoutes=require("./routes/CommanRoutes/commanRoutes.js")
const demoUserRoutes=require("./routes/UserRoutes/demouserRoutes.js");
var session = require('express-session');
const BettingRoutes=require("./routes/BetRoutes/BettingRoutes.js")
const dotenv=require("dotenv");
dotenv.config();
const dbConnection=require("./db/connection.js");
// connect to Mongodb database
dbConnection();
// create express app
const app=express();

// set the middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// set the routing prefix
app.use("/roulette",commanRoutes)
app.use("/roulette/user/demo-user",demoUserRoutes);
app.use("/roulette/bet",BettingRoutes)

// create  express server
let PORT=process.env.PORT||8000;
app.listen(PORT,()=>{
  console.log(`-_______SERVER IS RUNNING ON PORT ${PORT}_______`);
})