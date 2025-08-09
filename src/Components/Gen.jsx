import React from 'react'
import styles from './Geo.module.css'
import { Link } from 'react-router-dom'


const Gen = () => {
    return (
        <div className={styles.geo}>
            <div className={styles.box}>
                <h1>Geography</h1>
                <div className={styles.paper}>
                    <Link to='/GenGeo'><button>Geography</button></Link>
                    <p><Link to='/GenLS'>
                        <button>Life Sciences</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gen