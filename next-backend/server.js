const express = require("express")
const mongoose =require("mongoose")
const app = express()
const PORT = 5000
require ("dotenv").config()
const postRouter = require('./routes/post.js')






//DBに接続
mongoose.connect(process.env.MONGOURL).then(()=>{console.log("DBに接続しました")})



//サーバを起動
app.listen(PORT,()=>{
  console.log("サーバが起動しました")
})

//ミドルウェア
app.use(express.json())
app.use("/api/posts",postRouter)