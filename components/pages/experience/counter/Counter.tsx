import React from "react";
import styles from "./counter.module.css";

export default function Counter({ years }: { years: "6" | "9" }) {
  let yearBouncer = `bouncer_${years}`;
  let yearCounter = `counter_${years}`;
  return (
    <div className={`${styles.bouncer} ${styles[yearBouncer]}`}>
      <div className={`${styles.counter} ${styles[yearCounter]}`}>
        {" "}
        <div></div>
      </div>
    </div>
  );
}
