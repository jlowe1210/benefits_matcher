import React from "react";

import styles from "./Steps.module.css";

function Steps() {
  return (
    <div className={styles.steps_container}>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.step_number}>
            <h1>1</h1>
          </div>
          <p>
            See if you qualify, <br /> It'll only takes 45 seconds
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.step_number}>
            <h1>2</h1>
          </div>
          <p>
            If you qualified
            <br /> call the number on the screen
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.step_number}>
            <h1>3</h1>
          </div>
          <p>
            Recieve $6,400, <br /> That's it!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
