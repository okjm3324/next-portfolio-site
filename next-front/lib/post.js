import axios from "axios"
// //全てのpostsのオブジェクト配列（id:title)をparamsとして返す
// //getStaticPathsで使用する
// export function getPostsPaths (posts) {
//   //フルパスを作る
//   const fullPath = "http://localhost:3000/"
//   const postPaths = posts.map((post)=> fullPath + post.title)
//   //フルパスをidとして設定する
//   return postPaths.map((postPath)=>{
//     {
//       params:{
//         id: postPath
//       }
//     }
//   })
// }

// //指定のidのpostオブジェクトを返す
// export function getPostData (posts,id) {
//   const tarPost = posts.find((post)=>post.id === id)
//   return {
//     tarPost
//   }
// }

export const fetchData = async ()=>{
  try{
    const response = await axios.get("/posts")
    console.log(response.data)
    return response.data
  }catch(err){
    console.log(err)
  }
}
