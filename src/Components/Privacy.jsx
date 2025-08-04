import styles from './Privacy.module.css'

const Privacy = () => {
    return (
        <div className={styles.privacy}>
            <h1>Privacy Policy</h1>

            <p>
                Welcome to MatrIQ — an online learning platform supporting Grade 12 students 
                with quizzes adapted from official South African question papers. This Privacy Policy 
                explains how we collect, use, and safeguard your information when using our platform.
            </p>

            <h3 className={styles.date}>Last updated: 03 August 2025</h3>

            <h3>1. Information We Collect</h3>
            <p><strong>Personal Information</strong></p>
            <ul>
                <li>Full name (optional).</li>
                <li>Email address for login or communication.</li>
                <li>Grade level or subject interest (if provided).</li>
            </ul>
            <p>This helps personalize your experience and improve the platform.</p>

            <h4>User Activity</h4>
            <ul>
                <li>Quiz interactions and performance data.</li>
                <li>Subject/topic preferences.</li>
                <li>Technical info such as browser type, device, or region.</li>
            </ul>

            <h4>Cookies</h4>
            <p>
                MatrIQ uses cookies to remember your preferences, track quiz progress, 
                and enhance usability. Disabling cookies may impact some features.
            </p>

            <h3>2. Educational Content Disclosure</h3>
            <p>
                MatrIQ quizzes are based on past Grade 12 South African question papers. 
                We do not claim ownership of original exam content, which is used solely for educational purposes.
            </p>

            <h3>3. Use of Your Information</h3>
            <ul>
                <li>Generate personalized quizzes and feedback.</li>
                <li>Improve difficulty levels and content accuracy.</li>
                <li>Send updates and learning tips.</li>
            </ul>

            <h3>4. Data Security</h3>
            <p>
                We implement reasonable security measures including encryption and secure hosting. 
                However, no online system is completely risk-free.
            </p>

            <h3>5. Third-Party Services</h3>
            <p>
                We may use services like Firebase or Google Analytics for hosting and insights. 
                These platforms follow their own privacy standards.
            </p>

            <h3>6. POPIA Compliance & Your Rights</h3>
            <p>In line with POPIA, you may:</p>
            <ul>
                <li>Request access or updates to your personal data.</li>
                <li>Request deletion of your account and data.</li>
                <li>Limit certain types of data processing.</li>
            </ul>
            <p>To make a request, contact us at: <a href="mailto:info@matriq.co.za">info@matriq.co.za</a></p>

            <h3>7. Children's Privacy</h3>
            <p>
                MatrIQ is intended for learners aged 16 and older. We do not knowingly collect personal info from children under 13.
            </p>

            <h3>8. Educational Accuracy & Feedback</h3>
            <p>
                While we strive for accuracy, some quiz answers may differ slightly from original memorandums due to 
                curriculum updates or content corrections. If you are certain an answer is incorrect, 
                please contact us so we can review and correct it.
            </p>

            <h3>9. Learner Reviews</h3>
            <p>
                MatrIQ values learner feedback and provides features for students to leave reviews and 
                share their learning experience. Submitted reviews may be displayed publicly to help inform other users. 
                When posting a review, you agree that it reflects your genuine opinion, and that we may display it 
                alongside your username or avatar (if provided). Inappropriate or offensive content will be moderated.
            </p>

            <h3>10. Updates to This Policy</h3>
            <p>
                We may revise this Privacy Policy periodically. Major updates will be posted on the platform 
                with the latest revision date indicated above.
            </p>


            <h4>Contact Us</h4>
            <p>
                Questions or feedback? Reach out at: <a href="mailto:info@matriq.co.za">info@matriq.co.za</a>
            </p>
        </div>
    )
}

export default Privacy
