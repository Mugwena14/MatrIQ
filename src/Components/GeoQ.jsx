import React from 'react'
import styles from './GeoQ.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const GeoQ = () => {
    return (
        <div className={styles.geoQ}>
            <div className={styles.boxQ}>
                <h1>Geography Paper 1</h1>
                <div className={styles.paperQ}>
                    <p><Link to='/'><button className={styles.generateQ}>Generate My Quiz</button></Link></p>
                    <p><Link to='/Quiz/5'><button>Geography NSC P1 Nov 2024</button></Link></p>
                    <p><Link to='/Quiz/4'><button>Geography NSC P1 Nov 2023</button></Link></p>
                    <p><Link to='/Quiz/3'><button>Geography NSC P1 Nov 2022</button></Link></p>
                    <p><Link to='/Quiz/2'><button>Geography NSC P1 Nov 2021</button></Link></p>
                    <p><Link to='/Quiz/1'><button>Geography NSC P1 Nov 2020</button></Link></p>
                </div>
            </div>
        </div>
    )
}

export default GeoQ