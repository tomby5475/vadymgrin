"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import vadym from "../app/public/images/vadym.png";
import wave from "../app/public/images/wave.png";
import dot1 from "../app/public/images/Ellipse 1.png";
import dot2 from "../app/public/images/Ellipse 2.png";
import dot3 from "../app/public/images/Ellipse 3.png";
import dot4 from "../app/public/images/Ellipse 4.png";

export default function Intro() {
  useEffect(() => {
    const dots = document.querySelectorAll(`.${styles.dot}`);
    const container = document.querySelector(`.${styles.intro_header}`);
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const dotsData = Array.from(dots).map((dot) => {
      const initialX = Math.random() * containerWidth;
      const initialY = Math.random() * containerHeight;
      const velocityX = Math.random() * 1 + 1; 
      const velocityY = Math.random() * 1 + 1; 
      dot.style.top = `${initialY}px`;
      dot.style.left = `${initialX}px`;

      return {
        dot,
        x: initialX,
        y: initialY,
        vx: velocityX * (Math.random() > 0.5 ? 1 : -1),
        vy: velocityY * (Math.random() > 0.5 ? 1 : -1), 
      };
    });

    function animate() {
      dotsData.forEach((data) => {
        data.x += data.vx;
        data.y += data.vy;

        if (data.x <= 0 || data.x + 10 >= containerWidth) {
          data.vx *= -1; 
        }
        if (data.y <= 0 || data.y + 10 >= containerHeight) {
          data.vy *= -1; 
        }

        data.dot.style.left = `${data.x}px`;
        data.dot.style.top = `${data.y}px`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div id="about" className={styles.intro}>
      <div className={styles.intro_header}>
        <h1>Great design will save the world</h1>
        <div className={styles.dot}>
          <Image src={dot1} alt="dot" />
        </div>
        <div className={styles.dot}>
          <Image src={dot2} alt="dot" />
        </div>
        <div className={styles.dot}>
          <Image src={dot3} alt="dot" />
        </div>
        <div className={styles.dot}>
          <Image src={dot4} alt="dot" />
        </div>
      </div>
      <article className={styles.vadym_about}>
        <div className={styles.introImg}>
          <div className={styles.wave_icon}>
            <Image src={wave} alt="wave hand" />
          </div>
          <div className={styles.vadym_foto}>
            <Image src={vadym} alt="Vadym" />
          </div>
          <div className={styles.introImg_text}>
            <h2 className={styles.intro_heading}>Hi,</h2>
            <span className={styles.intro_name}>I'm Vadym Grin</span>
          </div>
        </div>
        <div className={styles.intro_about_text}>
          <p className={styles.intro_subheading}>That's why I</p>
          <p className={styles.action_text}>Teach,</p>
          <p className={styles.action_text}>Write about,</p>
          <p className={styles.action_text}>Do</p>
          <p className={styles.intro_focus}>Design</p>
          <p className={styles.intro_description}>
            I believe great design has the power to transform societies, bridge
            divides, and enrich lives.
          </p>
        </div>
      </article>
    </div>
  );
}
