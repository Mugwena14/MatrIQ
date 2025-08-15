import styles from './Benefits.module.css'
import image from '../assets/placeholder.jpg'
import feedback from '../assets/feedback.png'
import dark from '../assets/dark.png'
import generate from '../assets/generate.png'

const Benefits = () => {
    return (
        <div className={styles.container}>
            <div className={styles.why}>
                <h2>Why Use MatrIQ?</h2>
            </div>
            <div className={styles.benefits}>
                <div className={styles.cont}>
                    <div className={styles.image}>
                        <img src={generate} alt="" />
                    </div>
                    <h4>GENERATE QUIZ</h4>
                    <p>
                        Generate your own quiz, filtering by topics &
                        difficulty. Perfect for focused revision.
                    </p>
                </div>
                <div className={styles.cont}>
                    <div className={styles.image}>
                        <img src={feedback} alt=""  className={styles.fstImage}/>
                    </div>
                    <h4>IMMEDIATE FEEDBACK</h4>
                    <p>Get instant results after each answer
                        helping you learn faster and retain more.
                    </p>
                </div>
                <div className={styles.cont}>
                    <div className={styles.image}>
                        <img src={dark} alt="" />
                    </div>
                    <h4>DARK MODE</h4>
                    <p>
                        Study longer with less strain. MatrIQ's dark Mode
                        is easy on the eyes and battery-friendly.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Benefits