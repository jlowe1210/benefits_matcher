import React, { useState } from "react";
import styles from "./QualifyForms.module.css";

function QaulifyForm({ submit }) {
  const [tab, setTab] = useState(0);
  const [answers, setAnswers] = useState(["", "", ""]);

  function answerQuestion(e) {
    const newAnsers = [...answers];
    newAnsers[tab] = e.target.value;
    setAnswers([...newAnsers]);
  }

  const submitForm = () => {
    if (answers[2] === "Yes") {
      window.location.href =
        "https://www.cobrainsurancenetwork.com/vcobra8/step1.html";
      return;
    }
    submit();
  };

  return (
    <div id="qualify_form" className={styles.qualify_container}>
      <h1 className={styles.qualify_header}>Prequalification</h1>
      {tab === 0 && (
        <div>
          <div className={styles.form_container}>
            <h1>Do You Need Groceries At Home?</h1>
            <form>
              <div className={styles.input_container}>
                <label>Yes</label>
                <input
                  type="radio"
                  name="Groceries"
                  value="Yes"
                  checked={answers[tab] === "Yes"}
                  onChange={answerQuestion}
                />
              </div>
              <div className={styles.input_container}>
                <label>No</label>
                <input
                  type="radio"
                  name="Groceries"
                  value="No"
                  checked={answers[tab] === "No"}
                  onChange={answerQuestion}
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {tab === 1 && (
        <div>
          <div className={styles.form_container}>
            <h1>Do you work?</h1>
            <form>
              <div className={styles.input_container}>
                <label>Yes</label>
                <input
                  type="radio"
                  name="Groceries"
                  value="Yes"
                  checked={answers[tab] === "Yes"}
                  onChange={answerQuestion}
                />
              </div>
              <div className={styles.input_container}>
                <label>No</label>
                <input
                  type="radio"
                  name="Groceries"
                  value="No"
                  checked={answers[tab] === "No"}
                  onChange={answerQuestion}
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {tab === 2 && (
        <div>
          <div className={styles.form_container}>
            <h1>Do you receive medicaid?</h1>
            <h2>*Must Not Have Medicaid To Qualify</h2>
            <form>
              <div className={styles.input_container}>
                <label>Yes</label>
                <input
                  type="radio"
                  name="Groceries"
                  value="Yes"
                  checked={answers[tab] === "Yes"}
                  onChange={answerQuestion}
                />
              </div>
              <div className={styles.input_container}>
                <label>No</label>
                <input
                  type="radio"
                  name="Groceries"
                  value="No"
                  checked={answers[tab] === "No"}
                  onChange={answerQuestion}
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {tab === 3 && (
        <div>
          <div className={styles.form_container}>
            <div>
              <h2>Do You Need Groceries At Home?</h2>
              <p>{answers[0]}</p>
            </div>
            <div>
              <h2>Do you work?</h2>
              <p>{answers[1]}</p>
            </div>
            <div>
              <h2>Do you receive medicaid??</h2>
              <p>{answers[2]}</p>
            </div>
          </div>
          <button className={styles.qualify_btn} onClick={submitForm}>
            Submit
          </button>
        </div>
      )}

      <div className={styles.buttons_container}>
        <button
          disabled={tab === 0}
          className={`${styles.prev_btn} ${styles.qualify_container_btn}`}
          onClick={() => setTab((tab) => tab - 1)}
        >
          Prev
        </button>
        <button
          disabled={!answers[tab] || tab === 3}
          className={`${styles.next_btn} ${styles.qualify_container_btn}`}
          onClick={() => setTab((tab) => tab + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QaulifyForm;
