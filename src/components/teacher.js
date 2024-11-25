import Image from "next/image"
import styles from '../app/page.module.css'
import callIcon from "../app/public/images/call_icon.png"
import writeIcon from "../app/public/images/message_icon.png"

export default function Teacher () {
    return (
        <div className={styles.teacher}>
            <h1>Teacher</h1>
            <h2>Encouraging designers to keep pushing and making a meaningful difference</h2>
            <p>My true passion lies in mentoring fellow professionals and offering guidance to help them grow and succeed. Reach out if you’d like me to support your journey.</p>
            <div className={styles.teacher_cta}>
                <div className={styles.cta_btn}>
                    <a href="https://calendly.com/vadimgrin/meeting-with-vadym">
                        <Image
                            src={callIcon}
                            alt="headphones with microphone"
                        />
                        Book a call
                    </a>
                </div>
                <div className={styles.cta_btn}>
                    <a href="mailto:vadim.grin@gmail.com">
                        <Image
                            src={writeIcon}
                            alt="paper airplane"
                        />
                        Message me
                    </a>
                </div>
            </div>
        </div>
    )
}