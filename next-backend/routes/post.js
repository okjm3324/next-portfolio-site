const router = require("express").Router()
const Post = require("../models/post.js")


//記事を投稿する
router.post("/post",async (req,res)=>{
  try{
   const newPost = new Post(req.body)
   const savePost = await newPost.save()

  return res.status(200).json(savePost)
  

  }catch(err){
    return res.status(500).json(err)
  }

})


//全ての記事を取得する
router .get("/",async (req,res)=>{
  try{
    const posts = await Post.find()
    if(posts){
      return res.status(200).json(posts)
    }else{
      return res.status(400).json("投稿が見つかりません")
    }
  }catch(err){
   return res.status(500).json(err)
  }
 
})
//特定の記事を取得する
router .get("/:id",async (req,res)=>{
  try{
    const tarPost = await Post.findOne({id : req.params.id})
    if(tarPost){
      return res.status(200).json(tarPost)
    }else{
      return res.status(400).json("投稿が見つかりません")
    }
  }catch(err){
   return res.status(500).json(err)
  }
 
})

//記事を削除する
router.delete("/:id" , async (req,res) => {
  try{
    const tarPost = await Post.findOne({id : req.params.id}) 
    if(tarPost){
      tarPost.deleteOne()
      return res.status(200).json("削除が完了しました")
  
    }else{
      return res.status(400).json("投稿が見つかりません")
    }
    
  }catch(err){
   return res.status(500).json(err)
  }

})

//記事を更新する
router.put("/:id", async (req,res)=>{
  const tarPost = await Post.findOne({id: req.params.id})
  try{
    if(tarPost){
      await tarPost.updateOne({
        $set : req.body
      })
      return res.status(200).json(tarPost)

    }else{
      return res.status(400).json("指定の投稿がありません")
    }

  }catch(err){
    return res.status(500).json(err)
  }
  
})





module.exports = router