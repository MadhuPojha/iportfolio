import React from "react";

//import styles from "./CSS/Experience.module.css";
import styles from "../CSS/Experience.module.css";
import { getImageUrl } from "../utils";

export default function Experience(){
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>experience</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <div className={styles.aboutItemText}>
    
            <li className={styles.aboutItem}>
              <h3>Fullstack Developer Intern | Flexera | Stockholm | 2025 March– Present</h3>
            </li>
            <li className={styles.aboutItem}>
              <h3>Fullstack Developer Intern | Linespotting | Stockholm | 2024 December– 2025 Feb</h3>
            </li>
            <li className={styles.aboutItem}>
              <h3>Python Developer Intern | Infinity IT Consulting | Stockholm | 2024 Sept–2024 Nov</h3>
            </li>
            <li className={styles.aboutItem}>
              <h3>System Developer Intern | Lexicon Interactive | Stockholm | 2024 June</h3>
            </li>
            <li className={styles.aboutItem}>
              <h3>IT-Trainer | NGO | Bangalore, India | 2015-2017</h3>
            </li>
            <li className={styles.aboutItem}>
              <h3>IT-Teacher | Little-Flower School | Bangalore, India | 2012-2014</h3>
            </li>
            <li className={styles.aboutItem}>
              <h3>Java Developer | Fusion Software | Mumbai, India | 2009-2011</h3>
            </li>
            </div>
        </ul>
      </div>
    </section>
  );
};
