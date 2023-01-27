import React, { useState } from "react";
import styles from "./home.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ProgressChart from "./ProgressChart";

const AddClass = ({ setAddClick }) => {
  const [id, setId] = useState("");
  const [classEs, setClass] = useState("");
  function submitHandler() {
    //backend
    setId("");
    setClass("");
  }
  return (
    <div>
      <BsFillArrowLeftCircleFill
        className={styles.arrow}
        onClick={() => setAddClick(false)}
      />
      <div className={styles.homeContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.cardStudent}>
            <div className={styles.textfieldStudent}>
              <span>ID:</span>
              <input
                type="text"
                name=""
                id=""
                className={styles.input1}
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.cardStudent}>
            <div className={styles.textfieldStudent}>
              <span>ClassName:</span>
              <input
                type="text"
                name=""
                id=""
                value={classEs}
                className={styles.input1}
                onChange={(e) => setClass(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          className={styles.addButton}
          style={{ background: "green" }}
          onClick={() => submitHandler()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddClass;
