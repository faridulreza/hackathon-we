import React, { useState } from "react";
import styles from "./home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ProgressChart from "./ProgressChart";
import { auth, db, rdb } from "../../../../firebase";

const AddClass = ({ setAddClick }) => {
  const [id, setId] = useState("");
  const [classEs, setClass] = useState("");
  function submitHandler() {
    let meetlink = id.split("/");

    if (meetlink.length < 4) {
      toast("Invalid Meet link", { type: "error" });
      return;
    }

    meetlink = meetlink[3];
    let d = {
      className: classEs,
      teacher: auth.currentUser.uid,
      link: meetlink,
      attentions: [],
    };
    toast("Creating class", { type: "info" });
    db.collection("classes")
      .add(d)
      .then((e) => {
        toast("Class Created\n.", { type: "success" });
        rdb.ref(meetlink).set(e.id);
        let d = {};
        d[meetlink] = e.id;
        chrome.storage.local.set(d);
      })
      .catch((e) => {
        console.log("Could not create class", e);
        toast("Could not create class", { type: "error" });
      });

    console.log(d);

    setId("");
    setClass("");
  }
  return (
    <div>
      <ToastContainer theme="colored" />
      <BsFillArrowLeftCircleFill
        className={styles.arrow}
        onClick={() => setAddClick(false)}
      />
      <ToastContainer />
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
