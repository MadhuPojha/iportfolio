import React from "react";

//import styles from "./CSS/About.module.css";
import styles from "../CSS/About.module.css";
import { getImageUrl } from "../utils";

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
            
                <h3>Programming Languages:</h3>
                <p>Python, JavaScript, Go, Java, HTML, CSS</p>
                <br />
                <h3>Frameworks & Libraries:</h3>
                <p>Django, React, Bootstrap, Flask, Node.js</p>
                <br />
                <h3>Artificial Intelligence & Machine Learning::</h3>
                <p>TensorFlow, PyTorch, scikit-learn, OpenCV, Keras, Pandas, NumPy, Jupyter</p>
                <br />
                <h3>Databases:</h3>
                <p>MySQL, SQLite, MongoDB, PostgreSQL, Firebase</p>
                <br />
                <h3>Tools & Technologies:</h3>
                <p>Git, Docker, Kubernetes, APIs, CI/CD, Jira, Agile, Scrum, Kanban, Confluence</p>
                <br />
                <h3>Cloud Platforms:</h3>
                <p>Azure, Heroku</p>
                <br />
                <h3>Soft Skills:</h3>
                <p>Problem-solving, Time Management, Communication, Teamwork, Adaptability</p>
                <br />
                <h3>Languages:</h3>
                <p>English, Hindi, Swedish</p>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
