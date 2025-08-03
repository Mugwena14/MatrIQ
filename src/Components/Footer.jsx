import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.cont}>
                    <h2 className={styles.logo}>
                        <span  className={styles.logoL}>
                            L
                        </span>
                        KART
                    </h2>
                    <p className={styles.suggestions}>Questions, Suggestions or just a simple hi? HMU @loopkart.mugwena.co.za OR:</p>
                    <div className={styles.icons}>
                        <Link className={styles.icon1} to=""><FaSquareGithub /></Link>
                        <Link className={styles.icon2} to=""><FaLinkedin /></Link>
                    </div>
                    <div className={styles.important}>
                        <Link className={styles.terms} to='/Terms'>
                            <p>Terms & Conditions</p>
                        </Link>
                        <Link className={styles.conditions} to='/Privacy'>
                            <p>&middot; Privacy Policy</p>
                        </Link>
                        <p>&middot; All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer