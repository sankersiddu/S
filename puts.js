const express=require("express")
const app = express();
app.use(express.json())
app.put("/put2/",(req,res)=>{
    const {name,age,email}=req.body;
    const id=req.params.id;
    res.json({
        message:req
    })
})
app.listen(3001,()=>{
    console.log("Server is running at http://localhost:3001")
})