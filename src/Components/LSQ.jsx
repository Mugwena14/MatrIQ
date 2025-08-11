import React from 'react'
import styles from './LSQ.module.css'
import { Link } from 'react-router-dom'

const LSQ = () => {
    return (
        <div className={styles.LSQ}>
            <div className={styles.boxLSQ}>
                <h1>Life Sciences Paper 1</h1>
                <div className={styles.paperLSQ}>
                    <p><Link to='/QuizEngine3'><button className={styles.generateLSQ}>Generate My Quiz</button></Link></p>
                    <p><Link to='/Quiz/15'><button>Life Sciences NSC P1 Nov 2024</button></Link></p>
                    <p><Link to='/Quiz/14'><button>Life Sciences NSC P1 Nov 2023</button></Link></p>
                    <p><Link to='/Quiz/13'><button>Life Sciences NSC P1 Nov 2022</button></Link></p>
                    <p><Link to='/Quiz/12'><button>Life Sciences NSC P1 Nov 2021</button></Link></p>
                    <p><Link to='/Quiz/11'><button>Life Sciences NSC P1 Nov 2020</button></Link></p>
                </div>
            </div>
        </div>
    )
}

export default LSQ