import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.head}>
            <header>
                <div className={styles.logo}>
                    <p>LOGO</p>
                </div>
                <div className={styles.links}>
                    <nav>
                        <a className={styles.link} href='/Home'>HOME</a>
                        <Link className={styles.link}>GEOGRAPHY</Link>
                        <Link className={styles.link}>LIFE SCIENCES</Link>
                        <Link className={styles.link}>REVIEWS</Link>
                    </nav>
                </div>
                <div className={styles.mode}>
                    <p>MODE</p>
                </div>
            </header>
        </div>
    )
}

export default Header