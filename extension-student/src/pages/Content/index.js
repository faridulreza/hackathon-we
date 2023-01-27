import { auth, db, firebase } from "../../../firebase";
import startAnalysis from "./modules/CIgetter";
import { setRefs } from "./modules/decider";

//observe for tab change
//TODO::

//wait for the candidate to engage
function waitForStart(uid, classID) {
  let ahref = document.querySelector("a[data-present-landing=false]");

  if (!ahref) {
    //fetch the class
    db.collection("classes")
      .doc(classID)
      .get()
      .then((e) => {
        let teacher = e.get("teacher");
        let student = uid;

        let attention = {
          "attentions": [],
          teacher,
          student,
          "class": classID,
        };

        db.collection("attentions")
          .add(attention)
          .then(function (docRef) {
            db.collection("users")
              .doc(student)
              .update({
                attentions: firebase.firestore.FieldValue.arrayUnion(docRef.id),
              });
            db.collection("classes")
              .doc(classID)
              .update({
                attentions: firebase.firestore.FieldValue.arrayUnion(docRef.id),
              });
            setRefs(student, docRef.id);
            startAnalysis();
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    setTimeout(() => waitForStart(uid, classID), 500);
    console.log("found google meet wait");
  }
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  console.log(msg);
  if (msg?.start_observing) waitForStart(msg.uid, msg.classID);
});
