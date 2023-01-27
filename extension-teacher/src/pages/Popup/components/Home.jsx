import React from "react";
import { useState } from "react";
import styles from "./home.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import AddClass from "./AddClass";
import ProgressChart from "./ProgressChart";

function signOut() {
  chrome.runtime.sendMessage("signOut");
}
const Home = () => {
  const [open, setOpen] = useState(false);
  const [addClick, setAddClick] = useState(false);
  const [progress, setProgress] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(open);
  };

  const classes = [
    {
      name: "Networking",
      date: "2000-4-53",
    },
    {
      name: "Networking",
      date: "2000-4-53",
    },
    {
      name: "Networking",
      date: "2000-4-53",
    },
    {
      name: "Networking",
      date: "2000-4-53",
    },
    {
      name: "Networking",
      date: "2000-4-53",
    },
    {
      name: "Networking",
      date: "2000-4-53",
    },
    {
      name: "Networking",
      date: "2000-4-53",
    },
    {
      name: "Networking",
      date: "2000-4-53",
    },
  ];

  const students = [
    { name: "student Name", reg: "2003848904" },
    { name: "student Name", reg: "2003848904" },
    { name: "student Name", reg: "2003848904" },
    { name: "student Name", reg: "2003848904" },
    { name: "student Name", reg: "2003848904" },
    { name: "student Name", reg: "2003848904" },
    { name: "student Name", reg: "2003848904" },
  ];

  const handleProgress = () => {
    setProgress(!progress);
  };

  return (
    <div>
      {!open ? (
        <div>
          {!addClick ? (
            <div className={styles.homeContainer}>
              <div className={styles.innerContainer}>
                {classes.map((cls, index) => (
                  <div className={styles.card} key={index}>
                    <div className={styles.textfield} onClick={handleClick}>
                      <span className={styles.ppp}> {cls.name}</span>
                      <span>{cls.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={styles.addButton}
                onClick={() => setAddClick(true)}
              >
                Add Class
              </button>
              <button className={styles.signoutButton}>Sign Out</button>
            </div>
          ) : (
            <div>
              <AddClass setAddClick={setAddClick} />
            </div>
          )}
        </div>
      ) : (
        <div>
          <BsFillArrowLeftCircleFill
            className={styles.arrow}
            onClick={() => setOpen(false)}
          />
          <div className={styles.homeContainer}>
            {!progress && <ProgressChart />}
            <div className={styles.innerContainer}>
              {students.map((student, index) => (
                <div className={styles.cardStudent} key={index}>
                  <div className={styles.textfieldStudent}>
                    <span className={styles.studentName}>{student.name}</span>
                    <span className={styles.studentName}>{student.reg}</span>
                  </div>
                  <div className={styles.progress} onClick={handleProgress}>
                    75%
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.signoutButton}>LogOut</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
