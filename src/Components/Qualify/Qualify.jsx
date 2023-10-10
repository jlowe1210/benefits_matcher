import React, { useState } from "react";
import QaulifyForm from "../QualifyForms/QualifyForms";
import styles from "./Qaulify.module.css";

function Qualify() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {!submitted && <QaulifyForm submit={() => setSubmitted(true)} />}
      {submitted && (
        <div className={styles.container}>
          <div className={styles.qualify_container}>
            <h1>Congrats You Qualify</h1>
            <p>
              You Pre-Qualify For A <b>$6,400 Subsidy</b>.
            </p>
            <p>
              To Pay For Your{" "}
              <span className={styles.benefits}>
                Rent, Groceries & Health Expenses
              </span>
              .
            </p>
            <p>
              Confirm your info over the phone to receive this cash benefit.
            </p>
            <p className={styles.last_step}>
              <span className={styles.last_step_first_word}>
                <b>Last Step</b>
              </span>
              : You must Call Now to claim these benefits while it lasts.
            </p>
            <p>
              <b>Application Number: #C10756</b>
            </p>
            <h2 style={{ fontSize: "3rem" }}>Tap to Call</h2>
            <button className={styles.qualify_btn}>1 (888) 849-0501</button>
            <p>Act quickly! Pre-approval may end in 00:00</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Qualify;
