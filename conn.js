const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://localhost:27017/easy-transport-database").then(()=>{
    console.log("connection succesfull");
}).catch((e)=>{
    console.log("no connection");
});





const Userschema = new mongoose.Schema({
  
    pickUpaddress:{
       type:String,
       required:true
    },
    destination:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    }
});

var Usermodel = new mongoose.model("Userdata",Userschema);
module.exports = Usermodel;