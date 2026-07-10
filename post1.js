const express = require("express")
const app=express()
app.use(express.json());
app.post("/post2",(req,res)=>{
    const{name,age,email}=req.body;
    res.json({
        message:req.body
    });
})
app.listen(2999,()=>{
    console.log("Server is running at http://localhost:2999")
})