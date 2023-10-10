import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";

function Banner() {
  const words = ["Rent", "Grocery", "Health Expenses"];
  let [index, setIndex] = useState(0);

  const scrollTo = (id) => {
    let el = document.getElementById(id);

    console.log(el);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (index >= words.length - 1) {
        setIndex(() => 0);
      } else {
        setIndex((prevTime) => prevTime + 1);
      }
    }, 3000);

    // clear out the interval using the id when unmounting the component
    return () => {
      clearInterval(myInterval);
    };
  }, [index]);
  return (
    <>
      <div className={styles.jumbo}>
        <div className={styles.logo}>
          <img src="/benefits_Matcher.png" />
        </div>
        <div className={styles.jumbo_headline}>
          <div className={styles.jumbo_text}>
            <div>
              <p className={styles.headline}>
                Need Help paying for{" "}
                {<span style={{ color: "#810E10" }}>{words[index]}</span>} ?
              </p>
            </div>
            <div>
              <p className={styles.sub_headline}>
                Let the government help you. New program will give you $6,400
                towards these expensives don't wait!
              </p>
            </div>
            <button
              className={styles.qaulify_btn}
              onClick={() => scrollTo("qualify_form")}
            >
              prequalify Now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
