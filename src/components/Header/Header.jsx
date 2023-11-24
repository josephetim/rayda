import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
        <div>Logo</div>
        <div className={styles.headerLinksContainer}>
            <a className={styles.navLink} href='#'>Destinations</a>
            <a className={styles.navLink} href='#'>Hotels</a>
            <a className={styles.navLink} href='#'>Flights</a>
            <a className={styles.navLink} href='#'>Bookings</a>
            <a className={styles.navLink} href='#'>Login</a>
            <button className={`${styles['navLink']} ${styles['border']} `} href='#'>Sign up</button>
            <a className={styles.navLink} href='#'>EN</a>
        </div>
    </header>
  )
}

export default Header