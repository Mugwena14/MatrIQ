import React from 'react'
import styles from './Gen.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



    const Gen = () => {
    
    const [topic, setTopic] = useState()
    const [difficulty, setDifficulty] = useState()
    const [length, setLength] = useState()

    return (
        <div className={genTheme}>
            <div className={styles.gen}>
                <div className={styles.genBox}>
                    <form action="" className={styles.form}>
                            <h1>Generate Quiz</h1>
                        <div className={styles.field}>
                            <select 
                            value={topic}
                            onChange={(e) => {
                                setTopic(e.target.value)
                            }}
                            name="topic" id="topic" required>
                                <option value="">Choose Topic</option>
                                <option value="Climate and Weather">Climate & Weather</option>
                                <option value="Geomorphology">Geomorphology</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <select 
                            value={difficulty}
                            onChange={(e) => {
                                setDifficulty(e.target.value)
                            }}
                            name="difficulty" id="difficulty" required>
                                <option value="">Choose Difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <input
                            value={length}
                            onChange={(e) => {
                                setLength(e.target.value)
                            }}
                            type="number" placeholder="No of Qs. Max = 10" min={1} max={10} required/>
                        </div>
                        <button className={styles.genBtn}>Generate</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Gen