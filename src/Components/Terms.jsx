import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Terms.module.css'

const Terms = () => {
    return (
        <div className={styles.terms}>
            <h1>Terms and Conditions</h1>
            <h3>Last updated: 03 August 2025</h3>

            <p>
                Welcome to MatrIQ! By using our website and services, you agree to these Terms and Conditions 
                (“Terms”) which outline your responsibilities and rights. Please read them carefully before continuing.
            </p>

            <h3>1. Description of Service</h3>
            <p>
                MatrIQ is an educational platform designed to help South African Grade 12 learners revise 
                Life Sciences and Geography through quizzes inspired by past exam papers. Our goal is to improve 
                learning engagement while maintaining content integrity.
            </p>

            <h3>2. Educational Content</h3>
            <p>
                MatrIQ’s quizzes are adapted from publicly available question papers. While we aim for accuracy, 
                certain answers may differ from official memorandums as some of these have been amended. If you notice 
                an answer you are confident is incorrect, please contact us so we can review and correct it if necessary.
            </p>

            <h3>3. User-Generated Content</h3>
            <p>
                Learners may submit reviews or feedback about their learning experience. By posting a review, you agree that:
            </p>
            <ul>
                <li>Your feedback reflects your genuine opinion.</li>
                <li>Content must be respectful, free of offensive language.</li>
                <li>We may display your review publicly along with your name or profile avatar (if provided).</li>
            </ul>
            <p>
                MatrIQ reserves the right to moderate or remove inappropriate reviews.
            </p>

            <h3>4. Privacy</h3>
            <p>
                Your privacy matters. MatrIQ handles data in accordance with our <Link to="/Privacy">Privacy Policy</Link>, 
                which explains what we collect and how we use it. We comply with South Africa’s POPIA framework and use secure systems 
                such as Firebase to protect personal information.
            </p>

            <h3>5. Acceptable Use</h3>
            <p>
                By using MatrIQ, you agree to:
            </p>
            <ul>
                <li>Use the quizzes for educational purposes only.</li>
                <li>Respect other learners’ reviews and contributions.</li>
                <li>Not misuse platform features to spam, harass, or mislead others.</li>
            </ul>

            <h3>6. Intellectual Property</h3>
            <p>
                All MatrIQ branding, UI components, and custom content are intellectual property of the MatrIQ team. 
                You may not reproduce or redistribute them without permission. Original exam questions belong to their respective educational bodies.
            </p>

            <h3>7. Age Requirement</h3>
            <p>
                MatrIQ is intended for learners aged 16 and older. If you are under 16, please use the platform 
                under parental or teacher guidance. We do not knowingly allow registration of children under 13.
            </p>

            <h3>8. Limitation of Liability</h3>
            <p>
                MatrIQ is provided “as is” for educational purposes. While we work to ensure accuracy and platform reliability, 
                we are not responsible for any data loss, quiz errors, or learning outcomes. You accept full responsibility 
                for how you use the platform.
            </p>

            <h3>9. Termination</h3>
            <p>
                MatrIQ may suspend or terminate access if users violate these Terms, misuse features, or submit harmful content. 
                Termination may occur without prior notice for serious violations.
            </p>

            <h3>10. Changes to Terms</h3>
            <p>
                We may revise these Terms occasionally. Updates will be posted here, and continued use after changes implies acceptance.
            </p>

            <h3>11. Governing Law</h3>
            <p>
                These Terms shall be governed under the laws of South Africa. In case of any dispute, South African educational 
                and legal frameworks will apply.
            </p>

            <h4>Contact Us</h4>
            <p className={styles.questions}>
                Questions or concerns? Reach out at: <a href="mailto:info@matriq.co.za">info@matriq.co.za</a>
            </p>
        </div>
    )
}

export default Terms
