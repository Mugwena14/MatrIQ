import React from 'react'
import styles from './LS.module.css'

const LS = () => {
    return (
        <div className={styles.LS}>
            <div className={styles.box}>
                <h1>Life Sciences</h1>
                <div className={styles.paper}>
                    <p><button>Life Sciences Paper 1</button></p>
                    <p><button>Life Sciences Paper 2</button></p>
                </div>
            </div>
        </div>
    )
}

export default LS