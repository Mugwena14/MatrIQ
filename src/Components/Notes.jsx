import React from 'react'
import styles from './Notes.module.css'
import { BiError } from 'react-icons/bi'
import { useTheme } from '../Contexts/ThemeContext'

const Notes = () => {

    const { theme } = useTheme();
        
    // Picked the right style based on theme
    const notesTheme = theme === "light" ? styles.notesLight : styles.notesDark;

    return (
        <div className={notesTheme}>
            <div className={styles.notes}>
                <BiError className={styles.errorIcon}/>
                <h1>Notes Currently Not Available.</h1>
                <h2>Come back after a week or soo.</h2>
            </div>
        </div>
    )
}

export default Notes