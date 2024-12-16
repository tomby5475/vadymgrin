import Image from "next/image"
import styles from '../app/page.module.css'
import book from "../app/public/images/book_img.png"
import eidos from "../app/public/images/Eidos.png"
import manning from "../app/public/images/manning_icon.svg"
import amazon from "../app/public/images/amazon_icon.svg"
import substack from "../app/public/images/substack.svg"
import cloud from "../app/public/images/cloud.png"
import eidos_name from "../app/public/images/Eidos_name.svg"

export default function Writer () {
    return (
        <div className={styles.writer}>
            <h1 className={styles.writer_header}>Writer</h1>
            <Image className={styles.book_img}
                src={book}
                alt="book"    
            />
            <h3 className={styles.writer_about}>Uncovering design in words to raise a new generation of changemakers</h3>
            <p className={styles.writer_content}>In 2024, I published Emotional Digital Design - a book for novice designers and all digital professionals who want to better understand how to create products that spark.</p>
            <p className={styles.writer_content}>It shares practical insights on using psychology to craft digital products that create positive emotional experiences.</p>
            <div className={styles.writer_cta}>
                <div className={styles.btn_book}>
                    <a href="https://bit.ly/3ZsUQS4">
                        <Image
                            src={manning}
                            alt="manning icon"
                        />
                        <span>Get it on Manning</span>
                    </a>
                </div>
                <div className={styles.btn_book}>
                    <a href="">
                        <Image
                            src={amazon}
                            alt="amazon icon"
                        />
                        <span>Buy it on Amazon</span>
                    </a>
                </div>
            </div>
            <div className={styles.writer_eidos}>
                <div className={styles.eidos_icon}>
                    <Image
                        src={eidos_name}
                        alt="Eidos icon"
                    />
               </div>
                <div className={styles.main_img_wrapper}>
                    <div className={styles.main_img}>
                        <Image
                            src={eidos}
                            alt="Eidos"
                        />
                    </div>
                    <div className={styles.cloud}>
                        <Image
                            src={cloud}
                            alt="cloud"
                        />
                    </div>
                </div>
            </div>
            <h3 className={styles.writer_about}>For the growing community of such professionals, I also regularly publish insightful content on Substack</h3>
            <p className={styles.writer_content}>Discover a world of design with premium articles, gain insights into digital products, explore new tools, and unlock design knowledge and inspiration.</p>
            <div className={styles.writer_eidos_wrapper}>
                <div className={`${styles.btn_book} ${styles.btn_book_manning}`}>
                        <a href="https://eidosworld.substack.com/">
                            <Image
                                src={substack}
                                alt="substack icon"
                            />
                            <span>Subscribe on Substack</span>
                        </a>
                </div>
            </div>
        </div>
    )
}