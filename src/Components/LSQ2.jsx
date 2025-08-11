import React from 'react'
import styles from './LSQ.module.css'
import { Link } from 'react-router-dom'

const LSQ2 = () => {
    return (
        <div className={styles.LSQ}>
            <div className={styles.boxLSQ}>
                <h1>Life Sciences Paper 2</h1>
                <div className={styles.paperLSQ}>
                    <p><Link to='/QuizEngine4'><button className={styles.generateLSQ}>Generate My Quiz</button></Link></p>
                    <p><Link to='/Quiz/20'><button>Life Sciences NSC P2 Nov 2024</button></Link></p>
                    <p><Link to='/Quiz/19'><button>Life Sciences NSC P2 Nov 2023</button></Link></p>
                    <p><Link to='/Quiz/18'><button>Life Sciences NSC P2 Nov 2022</button></Link></p>
                    <p><Link to='/Quiz/17'><button>Life Sciences NSC P2 Nov 2021</button></Link></p>
                    <p><Link to='/Quiz/16'><button>Life Sciences NSC P2 Nov 2020</button></Link></p>
                </div>
            </div>
        </div>
    )
}

export default LSQ2