import Image from "next/image"
import styles from '../app/page.module.css'
import vadym from "../app/public/images/vadym.png"
import wave from "../app/public/images/wave.png"

export default function Intro () {
    return (
        <div className={styles.intro}>
            <h1>Great design will save the world</h1>
            <article className={styles.vadym_about}>
                <div className={styles.wave_icon}>
                    <Image
                        src={wave}
                        alt="wave hand"
                    />
                </div>
                <Image className={styles.vadym_foto}
                        src={vadym}
                        alt="vadym"
                />
                <h2 className={styles.intro_heading}>Hi,</h2>
                <span className={styles.intro_name}>I'm Vadym Grin</span>
                <p className={styles.intro_subheading}>That's why I</p>
                <p className={styles.action_text}>Teach,</p>
                <p className={styles.action_text}>Write about,</p>
                <p className={styles.action_text}>Do</p>
                <p className={styles.intro_focus}>Design</p>
                <p className={styles.intro_description}>I believe great design has the power to transform societies, bridge divides, and enrich lives.</p>
            </article> 
        </div>
    )
}