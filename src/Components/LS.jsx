import React from 'react'
import styles from './LS.module.css'
import { Link } from 'react-router-dom'

const LS = () => {
    return (
        <div className={styles.LS}>
            <div className={styles.box}>
                <h1>Life Sciences</h1>
                <div className={styles.paper}>
                    <Link to='/LSQ'><button>Life Sciences Paper 1</button></Link>
                    <p><button>Life Sciences Paper 2</button></p>
                </div>
            </div>
        </div>
    )
}

export default LS