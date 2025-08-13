import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.head}>
            <header>
                <div className={styles.logo}>
                    <p><span className={styles.M}>
                            M
                        </span>
                        IQ 
                    </p>
                </div>
                <div className={styles.links}>
                    <nav>
                        <Link className={styles.link} to='/Home'>Home</Link>
                        <Link className={styles.link} to='/Geo'>Geography</Link>
                        <Link className={styles.link} to='LS'>Life Sciences</Link>
                        <Link className={styles.link} to='/Reviews'>Reviews</Link>
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