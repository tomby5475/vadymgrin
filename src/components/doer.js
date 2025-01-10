"use client";
import { useState, useEffect } from "react";
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

const Doer = () => {
  const [columns, setColumns] = useState(2); // Default column count

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const images = [
    { src: attols, alt: "Attols logo" },
    { src: macPaw, alt: "Mac Paw logo" },
    { src: epam, alt: "Epam logo" },
    { src: groupon, alt: "Groupon logo" },
    { src: prArmy, alt: "PR Army logo" },
    { src: adjust, alt: "Adjust logo" },
    { src: trinetix, alt: "Trinetix logo" },
    { src: olx, alt: "OLX logo" },
    { src: firstAid, alt: "First Aid logo" },
  ];

  const customOrder = [0, 5, 1, 6, 2, 7, 3, 8, 4];
  const reorderedImages = customOrder.map((index) => images[index]);

  const columnedImages = Array.from({ length: columns }, (_, colIndex) =>
    reorderedImages.filter((_, imgIndex) => imgIndex % columns === colIndex)
  );

  return (
    <div className={`${styles.wrapper} ${styles.wrapper_light}`}>
      <div id="doer" className={`${styles.teacher} ${styles.doer}`}>
        <h1>Doer</h1>
        <div className={styles.doer_wrapper}>
          <div className={styles.doer_col}>
            <h2>
              Driving meaningful impact through intuitive and joyful design
              experiences
            </h2>
            <p className={styles.teacher_introduction}>
              My designs have helped people manage physical pain, improve their
              financial well-being, achieve business goals, and even provide
              crucial support to war refugees.
            </p>
            <p className={styles.teacher_introduction}>
              Since 2018, I’ve been also managing designers and leading design
              teams in B2B companies.
            </p>
            <div
              className={`${styles.btn_book} ${styles.btn_book_manning} ${styles.btn_doer}`}
            >
              <a
                href="https://www.linkedin.com/in/vadimgrin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedIn} alt="LinkedIn icon" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className={styles.teamLead}>
            {columnedImages.map((column, colIndex) => (
              <div key={colIndex} className={styles.teamLead_col}>
                {column.map((img, imgIndex) => (
                  <div key={imgIndex}>
                    <Image src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doer;
