import Image from "next/image";
import styles from "../app/page.module.css";
import linkedIn from "../app/public/images/icon_linkedin.svg";
import attols from "../app/public/images/logo_attols.svg";
import macPaw from "../app/public/images/logo_macPow.svg";
import epam from "../app/public/images/logo_epam.svg";
import groupon from "../app/public/images/logo_groupon.svg";
import prArmy from "../app/public/images/logo_prArmy.svg";
import adjust from "../app/public/images/logo_adjust.svg";
import trinetix from "../app/public/images/logo_trinetix.svg";
import olx from "../app/public/images/logo_olx.svg";
import firstAid from "../app/public/images/logo_firstAid.svg";

export default function Doer() {
  return (
    <div className={`${styles.teacher} ${styles.doer}`}>
      <h1>Doer</h1>
      <h2>
        Driving meaningful impact through intuitive and joyful design
        experiences
      </h2>
      <p className={styles.teacher_introduction}>
        My designs have helped people manage physical pain, improve their
        financial well-being, achieve business goals, and even provide crucial
        support to war refugees.
      </p>
      <p className={styles.teacher_introduction}>
        Since 2018, I’ve been also managing designers and leading design teams
        in B2B companies.
      </p>
      <div
        className={`${styles.btn_book} ${styles.btn_book_manning} ${styles.btn_doer}`}
      >
        <a href="https://www.linkedin.com/in/vadimgrin/">
          <Image src={linkedIn} alt="LinkedIn icon" />
          <span>LinkedIn</span>
        </a>
      </div>
      <div className={styles.teamLead}>
        <div className={styles.teamLead_col}>
          <div>
            <Image src={attols} alt="Attols logo" />
          </div>
          <div>
            <Image src={macPaw} alt="Mac Paw logo" />
          </div>
          <div>
            <Image src={epam} alt="Epam logo" />
          </div>
          <div>
            <Image src={groupon} alt="Groupon logo" />
          </div>
          <div>
            <Image src={prArmy} alt="PR Army logo" />
          </div>
        </div>
        <div className={styles.teamLead_col}>
          <div>
            <Image src={adjust} alt="Adjust logo" />
          </div>
          <div>
            <Image src={trinetix} alt="Trinetix logo" />
          </div>
          <div>
            <Image src={olx} alt="OLX logo" />
          </div>
          <div>
            <Image src={firstAid} alt="First Aid logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
