import React from "react";

//import styles from "./CSS/About.module.css";
import styles from "../CSS/About.module.css";

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
            
                <p><strong>Programming Languages : </strong>
                  Python, JavaScript, Go, Java, HTML, CSS
                </p>

                <p><strong>Frameworks & Libraries : </strong>
                  Django, React, Bootstrap, Flask, Node.js
                </p>
                <p><strong>Artificial Intelligence & Machine Learning : </strong>
                  TensorFlow, PyTorch, scikit-learn, OpenCV, Keras, Pandas, NumPy, Jupyter
                </p>

                <p><strong>Databases : </strong>
                  MySQL, SQLite, MongoDB, PostgreSQL, Firebase
                </p>

                <p><strong>Tools & Technologies : </strong>
                  Git, Docker, Kubernetes, APIs, CI/CD, Jira, Agile, Scrum, Kanban, Confluence
                </p>
                
                <p><strong>Cloud Platforms : </strong>
                  Azure, Heroku
                </p>
                
                <p><strong>Soft Skills : </strong>
                  Problem-solving, Time Management, Communication, Teamwork, Adaptability
                </p>
                
                <p><strong>Languages : </strong>
                  English, Hindi, Swedish
                </p>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
