import React from "react";

//import styles from "./CSS/About.module.css";
import styles from "../CSS/About.module.css";
import { getImageUrl } from "../utils";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={"./src/assets/aboutImage.png"}
          
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              
              <p>
                I am a Certified Associate Python Programmer (PCAP) and Software Engineer with over 5 years of experience in full-stack development, specializing in Python and Django.
                I have a solid foundation in modern web technologies, including JavaScript, React, HTML, CSS, and SQL, and I am passionate about building scalable, efficient, and user-centric applications.
                <br /><br />
                Currently, I am working as a Full-Stack Developer Intern. I recently completed a 6-month full-stack internship and a 5-month intensive training program at Lexicon IT-Proffs.
                My hands-on experience includes developing real-time chatbots, employee portals, smart dashboards, and e-commerce web applications using Agile methodologies and CI/CD pipelines (GitHub Actions).
                I have also worked with cloud platforms such as Azure and Heroku to deploy robust, production-ready solutions.
                <br /><br />
                I thrive in collaborative, data-driven environments and bring a proactive mindset to every project.
                With strong problem-solving skills, excellent communication abilities, and a constant drive to learn and grow, I am always ready to take on new challenges and deliver impactful solutions.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
