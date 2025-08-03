import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { 
    FaSquareGithub,
    FaLinkedin,
    FaXTwitter
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.cont}>
                    <div className={styles.leftLogo}>
                        <h2 className={styles.logo}>
                        <span  className={styles.logoL}>
                            L
                        </span>
                        Kart!
                        </h2>
                    </div>
                        <p> Jr FrontEnd Dev | React. <br />
                        Open to Full-Time Opportunities. <br />
                        Ideas, Feedbacks or just a simple hi? <br />
                        REACH OUT:
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
                        <h3>CAREER</h3>
                    </div>
                    <div className={styles.info}>
                        <p><Link className={styles.links} to='/Javascript'>Certified in Algorithms in JavaScript</Link></p>
                        <p><Link className={styles.links} to='/Responsive'>Certified in Responsive Web Design</Link></p>
                        <p><Link className={styles.links} to='/Libraries'>Certified in FrontEnd Libraries</Link></p>
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
        </footer>
    )
}

export default Footer