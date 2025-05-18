import React, { useState } from "react";
import styles from "../CSS/Navbar.module.css";
import { getImageUrl } from "../utils";
import menuIcon from '../assets/menuIcon.png';

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li> 
            <a className={styles.title} href="">
              Home
            </a>    
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
