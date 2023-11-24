import React from 'react'
import styles from './HeroSection.module.css'
import HeroImage from '../../assets/images/HeroImage.png'
const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.leftInfo}>
        <p className={styles.greenFont}>BEST DESTINATIONS AROUND THE WORLD</p>
        <p className={styles.largeFont}>Travel, enjoy and live a new and full life</p>
        <p className={styles.smallFont}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui odio accusantium quis, veritatis inventore beatae nemo a sit alias temporibus odit culpa quia accusamus error. Itaque architecto in qui?</p>
        <div className={styles.buttonRow}>
            <button className={styles.button1}>Find out more</button>
            <button className={styles.button2}>Play Demo</button>
        </div>
        </div>
        <div className={styles.rightInfo}>
            <img src={HeroImage} alt='heroImage'/>
        </div>
    </div>
  )
}

export default HeroSection