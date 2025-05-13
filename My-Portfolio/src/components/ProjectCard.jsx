import React from "react";

import styles from "../CSS/ProjectCard.module.css";
import { getImageUrl } from "../utils";

export default function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}){
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      
      <p className={styles.description}>{description}</p>
      <p className={styles.skills}>
        Skills: {skills.join(', ')}
      </p>

      
    </div>
  );
};
