import Image from "next/image"
import logo from '../app/public/images/logo.svg'
import styles from '../app/page.module.css'

export default function Header () {
    return (
        <div className={styles.header}>
            <Image
                className={styles.logo}
                src={logo}
                alt="logo"
            />
        </div>
    )
}