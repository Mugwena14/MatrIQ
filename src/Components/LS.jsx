import React from 'react'
import styles from './LS.module.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../Contexts/ThemeContext'


const LS = () => {

    const { theme } = useTheme();
    
    // Picked the right style based on theme
    const lsTheme = theme === "light" ? styles.lsLight : styles.lsDark;

    return (
        <div className={lsTheme}>
            <div className={styles.LS}>
                <div className={styles.box}>
                    <h1>Life Sciences</h1>
                    <div className={styles.paper}>
                        <p>
                            <Link to='/LSQ'><button>Life Sciences Paper 1</button></Link>
                        </p>
                        <p>
                            <Link to='/LSQ2'><button>Life Sciences Paper 2</button></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LS



    