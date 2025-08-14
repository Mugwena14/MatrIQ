import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { IoHomeOutline } from 'react-icons/io5'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { MdOutlineViewCarousel } from 'react-icons/md'
import { GiDna2 } from 'react-icons/gi'
import { CiLight } from 'react-icons/ci'


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
            <div className={styles.bar}>
                <div className={styles.app}>
                    <div className={styles.appIcons}>
                        <div className={styles.appIcon}>
                            <MdOutlineViewCarousel className={styles.reviewIcon}/>
                        <p>Reviews</p>
                        </div>
                    </div>
                </div>
                <div className={styles.app}>
                    <div className={styles.appIcons}>
                        <div className={styles.appIcon}>
                            <TiWeatherPartlySunny className={styles.geoIcon}/>
                        <p>Geo</p>
                        </div>
                    </div>
                </div>
                <div className={styles.app}>
                    <div className={styles.appIcons}>
                        <div className={styles.appIcon}>
                            <IoHomeOutline className={styles.homeIcon}/>
                        <p>Home</p>
                        </div>
                    </div>
                </div>
                <div className={styles.app}>
                    <div className={styles.appIcons}>
                        <div className={styles.appIcon}>
                            <GiDna2 className={styles.lsIcon}/>
                        <p>LS</p>
                        </div>
                    </div>
                </div>
                <div className={styles.app}>
                    <div className={styles.appIcons}>
                        <div className={styles.appIcon}>
                            <CiLight className={styles.modeIcon}/>
                        <p>Light</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header