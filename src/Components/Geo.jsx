import React from 'react'
import styles from './Geo.module.css'

const Geo = () => {
    return (
        <div className={styles.geo}>
            <div className={styles.box}>
                <h1>Geography</h1>
                <div className={styles.paper}>
                    <p><button>Geography Paper 1</button></p>
                    <p><button>Geography Paper 2</button></p>
                </div>
            </div>
        </div>
    )
}

export default Geo