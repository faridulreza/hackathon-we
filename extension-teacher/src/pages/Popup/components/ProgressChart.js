import React, { useState } from "react";
import styles from "./home.module.css";

const ProgressChart = () => {
  const [percentages, setPercentages] = useState([
    "10",
    "20",
    "30",
    "40",
    "50",
  ]);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.innerProgressContainer}>
        {percentages.map((percentage) => (
          <div className={styles.percentages}>{percentage}%</div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;
