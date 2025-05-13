import React from "react";
import styles from "../CSS/Experience.module.css";

export default function Experience(){
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>experience</h2>
      <div className={styles.content}>
      
        <ul className={styles.aboutItems}>
          <div className={styles.aboutItemText}>
    
            <li className={styles.aboutItem}>
              <p><strong>Fullstack Developer Intern | Flexera | Stockholm | 2025 March – Present : </strong><br />
                Developed a web app using Go (backend) and React (frontend) to provide customers a consolidated view of SaaS resource utilization costs.
                Implemented CI/CD pipelines, conducted code reviews, and enforced best practices for high-quality, secure, and efficient delivery.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>Fullstack Developer Intern | Linespotting | Stockholm | 2024 December– 2025 Feb : </strong><br />
                Developed a smart energy monitoring dashboard with features like consumption tracking, cost analysis, alerts, and real-time updates using Python, Flask, React, SCSS, and Firebase.
                Contributed to full-stack development, including CRUD operations for houses, devices, and sources, while collaborating via Git.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>Python Developer Intern|Infinity IT Consulting|Stockholm|2024 Sept–2024 Nov : </strong><br />
                Built an Employee Workplace Portal using Python and Django with role-based authentication, secure password reset, and RESTful APIs for enhanced functionality.
                Collaborated with React frontend developers for seamless integration, contributed to code reviews, and ensured efficient delivery through CI/CD pipelines. Managed version control and resolved merge conflicts using Git.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>System Developer Intern | Lexicon Interactive | Stockholm | 2024 June : </strong><br />
                Developed a responsive, interactive chatbot application using Python and Django, with real-time communication and thread management for seamless user experience.
                Implemented secure cross-domain embedding and optimized the design for multiple devices, deploying the application for reliable hosting.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>IT-Trainer | NGO | Bangalore, India | 2015-2017 : </strong><br />
                Designed and delivered training materials for youth with varying computer skills, leading workshops on HTML, CSS, word processing, spreadsheets, and internet use.
                Monitored student progress, managed feedback, and tracked sessions using basic database tools to ensure effective learning outcomes.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>IT-Teacher | Little-Flower School | Bangalore, India | 2012-2014 : </strong><br />
                Taught basic computer skills and introductory programming languages like HTML, JavaScript, SQL, C, and C++, providing hands-on support to enhance student learning.
                Guided students in coding, problem-solving, and responsible internet use, and led a project where they built a simple website using HTML and JavaScript.
              </p>
            </li>

            <li className={styles.aboutItem}>
              <p><strong>Java Developer | Fusion Software | Mumbai, India | 2009-2011 : </strong><br />
                Developed and tested a Loan Tracking System using Java, HTML, JavaScript, CSS, and SQL, with a focus on user-friendly interfaces and smooth functionality.
                Utilized CI/CD pipelines for continuous integration and delivery, and enhanced performance by reviewing and debugging existing code.
              </p>
            </li>
            </div>
        </ul>
      </div>
    </section>
  );
};
