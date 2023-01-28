import React from "react";

import styles from "./student.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { db, rdb, firebase } from "../../../../firebase";

let students_presents = {};

const SingleStudent = ({ student }) => {
  const [CI, setCI] = useState(0);

  useEffect(() => {
    rdb.ref(student.uid).on("value", (snap) => {
      setCI(snap.val());
    });
  }, []);

  console.log("sd", student);

  return (
    <div className={styles.cardStudent}>
      <div className={styles.textfieldStudent}>
        <img className={styles.imageClass} src={student.photo}></img>
        <span className={styles.studentName}>{student.name}</span>
        <span className={styles.studentName}>{student.reg}</span>
      </div>
      <div className={styles.progress}>
        {(Math.round(CI * 100) / 100).toFixed(2)}%
      </div>
    </div>
  );
};
const Students = ({ classID, setShow }) => {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [student_ids, setStudent_ids] = useState([]);

  useEffect(() => {
    student_ids.forEach((id) => {
      db.collection("users")
        .doc(id)
        .get()
        .then((st) => {
          let di = {
            name: st.get("name"),
            reg: st.get("reg"),
            photo: st.get("photo"),
            uid: id,
          };
          console.log("Sss", di);
          setStudents((pre) => {
            return [...pre, di];
          });
        });
    });
  }, [student_ids]);

  useEffect(() => {
    db.collection("classes")
      .doc(classID)
      .onSnapshot((doc) => {
        let data = doc.data();
        console.log(data);
        let attentions = data.attentions;

        for (let i = 0; i < attentions.length; i++) {
          let at_id = attentions[i];
          db.collection("attentions")
            .doc(at_id)
            .get()
            .then((d) => {
              let sid = d.get("student");

              if (!students_presents[sid]) {
                students_presents[sid] = true;
                console.log("here", sid);

                setStudent_ids((pre) => {
                  return [...pre, sid];
                });
              }
            });
        }
      });
  }, []);

  return (
    <div>
      <div>
        <div className={styles.homeContainer}>
          <div className={styles.innerContainer}>
            {students.map((student, index) => {
              return <SingleStudent student={student} key={index} />;
            })}
          </div>
          <button
            onClick={() => setShow(false)}
            className={styles.signoutButton}
          >
            HIDE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;
