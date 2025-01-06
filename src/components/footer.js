import Image from "next/image";
import styles from "../app/page.module.css";
import logo from "../app/public/images/logo_grinS.svg";
import linkedIn from "../app/public/images/icon_linkedin.svg";
import substack from "../app/public/images/icon_substack.svg";
import insta from "../app/public/images/icon_instagram.svg";
import medium from "../app/public/images/icon_medium.svg";
import dot1 from "../app/public/images/Ellipse 1.png";
import dot2 from "../app/public/images/Ellipse 2.png";
import dot3 from "../app/public/images/Ellipse 3.png";
import dot4 from "../app/public/images/Ellipse 4.png";

export default function footer() {
  return (
    <div id="contacts" className={styles.footer}>
      <div className={styles.footer_logo}>
        <Image src={logo} alt="Logo Grin" />
      </div>
      <div className={styles.footer_dots}>
        <Image src={dot1} alt="dot" />
        <Image src={dot2} alt="dot" />
        <Image src={dot3} alt="dot" />
        <Image src={dot4} alt="dot" />
      </div>
      <div className={styles.footer_socialMedia}>
        <a href="https://www.linkedin.com/in/vadimgrin/">
          <Image src={linkedIn} alt="LinkedIn icon" />
        </a>
        <a href="https://eidosworld.substack.com/">
          <Image src={substack} alt="Substack icon" />
        </a>
        <a href="https://www.instagram.com/vadimgrin/">
          <Image src={insta} alt="Instagram icon" />
        </a>
        <a href="https://medium.com/@vadimgrin">
          <Image src={medium} alt="Medium icon" />
        </a>
      </div>
    </div>
  );
}
