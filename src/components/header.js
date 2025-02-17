import Image from "next/image";
import logo from "/public/images/logo.svg";
import styles from "../app/page.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.navMenu}>
          <ul>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#teacher">TEACHER</a>
            </li>
            <li>
              <a href="#writer">WRITER</a>
            </li>
            <li>
              <a href="#doer">DOER</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
