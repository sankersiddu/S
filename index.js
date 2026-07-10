const express = require("express")
const app = express()
app.post("/post1",(req,res)=>{
    res.json({message:"Post Api requested"})
})
app.get("/get1",(req,res)=>{
    res.json({message:"Get Api requested"})
})
app.put("/put1",(req,res)=>{
    res.json({message:"Put Api request"})
})
app.delete("/delete",(req,res)=>{
    res.json({message:"Delete apirequest"})
})
app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000")
})