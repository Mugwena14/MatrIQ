import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.links}>
                <nav>
                    <Link className={styles.link}>HOME</Link>
                    <Link className={styles.link}>GEOGRAPHY</Link>
                    <Link className={styles.link}>LIFE SCIENCES</Link>
                    <Link className={styles.link}>REVIEWS</Link>
                </nav>
            </div>
            <div className={styles.mode}>
                MODE
            </div>
        </header>
    )
}

export default Header