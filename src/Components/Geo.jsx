import React from 'react'
import styles from './Geo.module.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../Contexts/ThemeContext'

const Geo = () => {

    const { theme } = useTheme();
    
    // Picked the right style based on theme
    const geoTheme = theme === "light" ? styles.geoLight : styles.geoDark;

    return (
        <div className={geoTheme}>
            <div className={styles.geo}>
                <div className={styles.box}>
                    <h1>Geography</h1>
                    <div className={styles.paper}>
                        <Link to='/GeoQ'><button>Geography Paper 1</button></Link>
                        <p><Link to='/GeoQ2'>
                            <button>Geography Paper 2</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Geo




        