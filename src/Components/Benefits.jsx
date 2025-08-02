import styles from './Benefits.module.css'

const Benefits = () => {
    return (
        <div className={styles.container}>
            <div>
                <p>Why Use MatrIQ?</p>
            </div>
            <div className={styles.cont}>
                <div className={styles.image}>
                    <img src="" alt="" />
                </div>
                <h4>IMMEDIATE FEEDBACK</h4>
                <p>Get instant results after each answer
                    helping you learn faster and retain more.
                </p>
            </div>
            <div className={styles.cont}>
                <div className={styles.image}>
                    <img src="" alt="" />
                </div>
                <h4>GENERATE QUIZ</h4>
                <p>
                    Generate your own quiz, filtering by topics &
                    difficulty. Perfect for focused revision.
                </p>
            </div>
            <div className={styles.cont}>
                <div className={styles.image}>
                    <img src="" alt="" />
                </div>
                <h4>DARK MODE</h4>
                <p>
                    Study longer with less strain. MatrIQ's dark Mode
                    is easy on the eyes and battery-friendly.
                </p>
            </div>
        </div>
    )
}

export default Benefits