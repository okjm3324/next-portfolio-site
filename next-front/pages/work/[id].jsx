
import  Tag  from '../../component/atoms/tag/Tag'
import  Header  from '../../component/molcules/header/Header'
import styles from "./Work.module.css"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import axios from 'axios';


//SSGトライ

// //SSGの全てのパス設定
// export function getStagicPaths () {
//   const paths = getPostsPaths(posts)
  
//   return {
//     paths,
//     fallback:false,
//   }

// }

// //SSGのprops設定
// export function getStaticProps (id){
//   const postData = getPostData(posts,id)
  
//   return {
//     props : {
//       postData
//     }
//   }
// }

//SSGトライ　ここまで

 //const Work = ({postData}) => {
  const Work = () => {
  


  // axtiosを使ったdetafetchパターン
 const router = useRouter();
  const [post,setPost] = useState({})
  const [skills,setSkills] = useState([])

  useEffect(()=>{
    console.log(router.query.id)
    const fetchArticle = async ()=>{
      const article = await axios.get(`/posts`)
      const posts = article.data
      const tarPost = posts.find((post)=>{
       return post.id === router.query.id
      })
      setPost(tarPost)
      setSkills(tarPost.skills)
    }

    fetchArticle()
    console.log(post)
    console.log(skills)
  },[])



  return (
    <div>

        <Header/>
    <div className={styles['detail-container']}>
        <div className={styles['work-thumbnail']}>
          <img className={styles['work-thumbnail-img']} src="/assets/thumbnail/aca8812f.jpg"></img>
        </div>

        <div className={styles['work-title']}>
          <h1>{post.title}</h1>
        </div>
        <div className={styles['workdetail-description']}>
          <p>{post.content}</p>
        </div>
        <div className={styles.skills}>
          <ul className={styles['skill-items']}>
         
           
            {skills.map((skill)=>{
                return(
                  <li id={skill}className={styles['skill-item']}> <Tag tagText={skill}/></li>
                )
            })}
          </ul>
        </div>

        <div className={styles['content-images']}>
          <img className={styles['content-img']} src='/assets/thumbnail/aca8812f.jpg'></img>

        </div>

        
        <Link className={styles['back-link']} href="/">Back</Link>
    </div>

    </div>
  )
}

export default Work
