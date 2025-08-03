import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { 
    FaSquareGithub,
    FaLinkedin,
    FaXTwitter
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.cont}>
                    <div className={styles.leftLogo}>
                        <h2 className={styles.logo}>
                        <span  className={styles.logoL}>
                            M
                        </span>
                        IQ
                        </h2>
                    </div>
                        <p> Your journey only starts here <br />
                        Keep revising, Keep Growing <br />
                        "The hungry don't rest" and neither does<br />
                        MatrIQ. Big features on the way. <br />
                        HAPPY PREP.
                        </p>
                    <div className={styles.icons}>
                        <Link className={styles.icon1} to='https://github.com/Mugwena14'><FaSquareGithub /></Link>
                        <Link className={styles.icon2} to='https://linkedin.com/in/langavi-makhubele-clyde'><FaLinkedin /></Link>
                        <Link className={styles.icon3} to='https://x.com/MugwenaDev'><FaXTwitter /></Link>
                        <Link className={styles.icon4} to='https://youtube.com/@MugwenaDev'><FaYoutube /></Link>
                    </div>
                    
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>CONTACT</h3>
                    </div>
                    <div className={styles.info}>
                        <p><Link className={styles.links} to='https://github.com/Mugwena14'>GitHub</Link></p>
                        <p><Link className={styles.links} to='https://linkedin.com/in/langavi-makhubele-clyde'>LinkedIn</Link></p>
                        <p><Link className={styles.links} to='maitlto:mlangaviclyde@gmail.com'>Email</Link></p>
                        <p><Link className={styles.links} to='tel:0685021117'>Phone</Link></p>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>HELP</h3>
                    </div>
                    <div className={styles.info}>
                        <p><Link className={styles.links} to=''>How to use</Link></p>
                        <p><Link className={styles.links} to='/Terms'>Terms & Conditions</Link></p>
                        <p><Link className={styles.links} to='/Privacy'>Policy & Privacy</Link></p>
                        <p>All rights Reserved</p>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>RESOURCES</h3>
                    </div>
                    <div className={styles.info}>
                        <p>HTML / CSS</p>
                        <p>React</p>
                        <p>FireBase</p>
                        <p>Git</p>
                    </div>
                </div>
            </div>
                <div className={styles.copyright}>
                    <p>&copy; {date} Copyright: MatrIQ</p>
                </div>
        </footer>
    )
}

export default Footer