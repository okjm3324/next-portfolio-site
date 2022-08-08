
import Header  from '../../component/molcules/header/Header'

import styles from "./About.module.css"

const  About = () => {
  return (
    <div className={styles.about}>
    <Header />

    <div className={styles['about-container']}>
      <div className={styles['about-item']}> 
      <h1>About Me</h1>
      <h2>A SoftwareDevelopper</h2>
      <p>ご閲覧いただきありがとうございます。前の会社で1年間製鉄関係のプログラムを触らせていただきました。使用言語はVB.netです。現在はWEB企業への就職に向けて独学でReactによるWEBアプリ開発をしています。Udemyやyoutubeを主な教材として使用しています。WEB開発がしたいです。</p>
      <br />
      <h2>Hobby</h2>
      <ul className={styles['about-ul']}>
        
        <li><h3>Guitar</h3>
          <p>ギターの挫折率をご存知ですか。ギターメーカーであるフェンダー社が行った調査によると、ギターを新しく始めた人の90％が一年以内に挫折しているそうです。そんな中、気付けば15年以上弾いています。生存者です。コツコツ続ける性格です。一度嫌いになってからが本番だと思ってます。</p>
        </li>
        <li><h3>English</h3>
         <p>中学生の頃、Eminemに衝撃を受け、その頃から洋楽の魅力に取り憑かれ、アメリカにいくことが夢になりました。洋画も大好きです。
         人生で一度、英語圏に住むことが夢です。</p> 
        </li>
     
      </ul>
     </div>
    
    </div>
    
    
    </div>
    
    
   
  )
}
export default About
