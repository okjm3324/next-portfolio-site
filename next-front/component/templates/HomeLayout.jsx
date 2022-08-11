
import Footer from '../molcules/footer/Footer'
import Header from '../molcules/header/Header'
import styles from "./HomeLayout.module.css"

const HomeLayout = ({children}) => {
  return (

    <div className={styles['home-layout']}>
      <Header/>
      <div className={styles['works-container']}>
      {children}
      
      </div>
      <Footer className={styles.homeFooter} />
    </div>
  )
}

export default HomeLayout
