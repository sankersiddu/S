const express =require("express")
const router = express.Router()
const User=require("../model/user")
router.post("/post3",(req,res)=>{
    const {name,age,email}=req.body
    res.json({message:req.body})
})
router.post("/post4",(req,res)=>{
    const {name,age,email}=req.body
    res.json({message:req.body})
})
router.post("/user/add",async (req,res)=>{
    const {name,age,email}=req.body;
    const user = new User({
        name,
        age,
        email
    })
    await user.save()
    res.json({
        message:"User added Sucessfully"
    })
})
router.get("/getuser",async(req,res)=>{
    const all = await User.find()
    res.json(all)
})
router.delete("/deleteuser/:id",async(req,res)=>{
    const id=req.params.id;
    await User.findByIdAndDelete(id)
    res.json({message:"User Deleted"})
})
router.get("/getoneuser/:id",async(req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id)
    res.json(user)
})
module.exports =router;