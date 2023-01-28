import React from "react";

import styles from "./stat.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Students from "./Student";

const StatHome = ({ classID }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.statRoot}>
      {!show && (
        <button onClick={() => setShow(true)} className={styles.hoverButton}>
          show
        </button>
      )}
      {show && <Students classID={classID} setShow={setShow} />}
    </div>
  );
};

export default StatHome;
