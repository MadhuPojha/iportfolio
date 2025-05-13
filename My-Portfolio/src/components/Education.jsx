import React from "react";

import styles from "../CSS/About.module.css";

export default function Education() {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education & Certification</h2>
      <div className={styles.content}>
    
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
                
                <h3>Certified Associate Python Programmer (PCAP) - Python Institute - Feb 2025</h3>
                <h3>Artificial Intelligence Fundamentals - IBM Skills Build - Dec 2024</h3>
                <h3>Python for Data Science  IBM Skills Build - Dec 2024</h3>
                <h3>Data Analyst Fundamentals - IBM Skills Build, Oct - Dec 2024</h3>
                <h3>Web Development Fundamentals - IBM Skills Build, Oct - Nov 2024</h3>
                <h3>Python & Data IT Security – Lexicon IT-Proffs, Mar 2024 – Aug 2024</h3>
                <h3>PECP Certification – Python Institute, Dec 2023</h3>
                <h3>Bachelor in Arts – VKSU, 2005 - 2008</h3>
                <br />
                <h2 className={styles.title}>Courses</h2>
                <h3>Docker for the Absolute Beginner - Hands On DevOps - UDEMY(May 2025) </h3>
                <h3>Kubernetes for the Absolute Beginners - Hands-on - UDEMY(May 2025)</h3>
                <h3>Machine Learning Model Deployment with Flask, React & NodeJS - UDEMY(April 2025) </h3>
                <h3>5-Days Coding Challenge(Html, Js, Css) / Code Institute(2024)</h3>
                <h3>Agile methodology / Stockholm IT Academy(2024)</h3>
                <h3>Software Testing Fundamentals / Stockholm IT Academy(2024)</h3>
                <h3>Java / NIIT, Mumbai, India(2009)</h3>
                <h3>Certification in computer software / Aptech, Mumbai, India(2008)</h3>


              
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
