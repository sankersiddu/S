const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/csmA");
        console.log("Database Connected");
    }catch(error){
        console.log("Database Connection Failed Error");
    }
}
module.exports=connectDB;