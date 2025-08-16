import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { IoHomeOutline } from 'react-icons/io5'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { MdOutlineViewCarousel } from 'react-icons/md'
import { FaBook } from 'react-icons/fa'
import { PiDnaLight } from 'react-icons/pi'
import { useTheme } from '../Contexts/ThemeContext'

const Header = () => {

  const { theme, toggleTheme } = useTheme();

    return (
        <div className={styles.head}>
            <header className={styles.header}>
            <div className={styles.logo}>
                <p>
                <span className={styles.M}>M</span> IQ
                </p>
            </div>
            <div className={styles.links}>
                <nav>
                <NavLink 
                    to="/Home" 
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    Home
                </NavLink>

                <NavLink 
                    to="/Geo" 
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    Geography
                </NavLink>

                <NavLink 
                    to="/LS" 
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    Life Sciences
                </NavLink>

                <NavLink 
                    to="/Reviews" 
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    Reviews
                </NavLink>
                </nav>
            </div>
            <div className={styles.mode}>
                <button onClick={toggleTheme}>MODE</button>
            </div>
            </header>
                <div className={styles.bar}>
          
                <div className={styles.app}>
                  <div className={styles.appIcons}>
                    <div className={styles.appIcon}>
                      <NavLink 
                        to="/Reviews" 
                        className={({ isActive }) => 
                          `${styles.iconLink} ${isActive ? styles.active : ''}`
                        }
                      >
                        <MdOutlineViewCarousel />
                      </NavLink>
                      <p>Reviews</p>
                    </div>
                  </div>
                </div>
                  <div className={styles.app}>
                    <div className={styles.appIcons}>
                      <div className={styles.appIcon}>
                        <NavLink 
                          to="/Geo" 
                          className={({ isActive }) => 
                            `${styles.iconLink} ${isActive ? styles.active : ''}`
                          }
                        >
                          <TiWeatherPartlySunny />
                        </NavLink>
                        <p>Geo</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.app}>
                    <div className={styles.appIcons}>
                      <div className={styles.appIcon}>
                        <NavLink 
                          to="/Home" 
                          className={({ isActive }) => 
                            `${styles.iconLink} ${isActive ? styles.active : ''}`
                          }
                        >
                          <IoHomeOutline />
                        </NavLink>
                        <p>Home</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.app}>
                    <div className={styles.appIcons}>
                      <div className={styles.appIcon}>
                        <NavLink 
                          to="/LS" 
                          className={({ isActive }) => 
                            `${styles.iconLink} ${isActive ? styles.active : ''}`
                          }
                        >
                          <PiDnaLight />
                        </NavLink>
                        <p>LS</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.app}>
                    <div className={styles.appIcons}>
                      <div className={styles.appIcon}>
                        <NavLink 
                          to="/LS" 
                          className={({ isActive }) => 
                            `${styles.iconLink} ${isActive ? styles.active : ''}`
                          }
                        >
                          <FaBook />
                        </NavLink>
                        <p>Notes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Nav Bar */}
                <div className={styles.upBar}>
                    <div className={styles.matricLogo}>
                        <Link to='/Home' className={styles.matricLink}>
                          Matric IQ
                        </Link>
                    </div>
                    <div className={styles.tglButton}>
                      <p>Mode</p>
                    </div>
                </div>
        </div>
    )
}

export default Header