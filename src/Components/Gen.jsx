import React from 'react'
import styles from './Geo.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Gen = () => {

    const [topic, setTopic] = useState()
    const [difficulty, setDifficulty] = useState()
    const [length, setLength] = useState()

    return (
        <div className={styles.geo}>
            <div className={styles.box}>
                <h1>Geography Paper 1</h1>
                <form action="">
                    <div className=''>
                        <label htmlFor="topic">Filter by topic.</label>
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
                    <div className=''>
                        <label htmlFor="difficulty">Difficulty Level</label>
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
                    <div className=''>
                        <label htmlFor="length">Number of questions</label>
                        <input
                        value={length}
                        onChange={(e) => {
                            setLength(e.target.value)
                        }}
                        type="number" placeholder="Max is 10" min={1} max={10} required/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Gen