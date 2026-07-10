const express=require("express")
const app = express();
app.use(express.json())
const connectDB=require("./config/db")
const postroutes=require("./routes/posts1")
app.use("/post1",postroutes)
connectDB();
app.listen(3003,()=>{
    console.log("Server is running at http://localhost:3003")
})