import React from "react";
import styles from "../CSS/Hero.module.css";
import my_img from '../assets/my_img.jpg';

export default function Hero(){
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Madhu Priyadarshni Ojha</h1>
        <p className={styles.description}>
         With over five years of experience in backend development, I am currently 
         <br />
         open to opportunities as a Python | Full-Stack | or Web Developer. 
         <br />
         Feel free to reach out to learn more!        </p>
        <a href="mailto:mpriya1201@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={my_img}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
