import React from 'react'
import styles from './GeoQ.module.css'
import { Link } from 'react-router-dom'

const GeoQ2 = () => {
    return (
        <div className={styles.geoQ}>
            <div className={styles.boxQ}>
                <h1>Geography Paper 2</h1>
                <div className={styles.paperQ}>
                    <p><Link to='/'><button className={styles.generateQ}>Generate My Quiz</button></Link></p>
                    <p><Link to='/Quiz/9'><button>Geography NSC P2 Nov 2024</button></Link></p>
                    <p><Link to='/Quiz/8'><button>Geography NSC P2 Nov 2023</button></Link></p>
                    <p><Link to='/Quiz/7'><button>Geography NSC P2 Nov 2022</button></Link></p>
                    <p><Link to='/Quiz/6'><button>Geography NSC P2 Nov 2021</button></Link></p>
                    <p><Link to='/'><button>Geography NSC P2 Nov 2020</button></Link></p>
                </div>
            </div>
        </div>
    )
}

export default GeoQ2