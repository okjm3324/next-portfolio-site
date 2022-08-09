
import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'
import { CardGitLogo, GitLogo } from '../../atoms/Icons/Icons'
import styles from "./WorkCard.module.css"





const WorkCard = (props) => {
  const {post} = props


  return (
    
      <div className={styles['work-card']}>
      
        
        <div className={styles['thumbnail']}>
          <Link href={{pathname:`/work/${post.id}`}}>
           <img className={styles['thumbnail-img']} src='/assets/thumbnail/aca8812f.jpg'></img>
          </Link>
        </div>

        <div className={styles['work-description']}>
          <div className={styles['work-title']}>
            <h1>{post.title}</h1>
        
          </div>
          <div className={styles['card-logo']}>
           <CardGitLogo />
   
          </div>
         <div className={styles['desc-text']}>
         <p>{post.content}</p>
         <ul>
         {post.skills.map((skill)=>(<li key={skill}>{skill}</li>))}
         </ul>
         
         </div>
         
        </div>
      
     
      
      
      </div>
 


  )
}

export default WorkCard
