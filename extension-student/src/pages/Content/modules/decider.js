import { db, rdb, firebase } from "../../../../firebase";

let startTime = null;
let endTime = null;
let totalCIValue = 0;
let totalCIcnt = 0;
let realtimeRef = null;
let attentionRef = null;

async function pushAttentionInterval() {}

export async function setRefs(uid, attention_id) {
  realtimeRef = rdb.ref(uid);
  attentionRef = db.collection("attentions").add(attention_id);
}

async function decide(CI) {
  if (startTime == null) {
    startTime = Date.now();
    totalCIValue = totalCIcnt = 0;
  }
  totalCIValue += CI;
  totalCIcnt++;

  let timePassed = Date.now() - startTime;
  realtimeRef.set(totalCIValue / totalCIcnt);

  if (timePassed >= 5 * 60 * 1000) {
    endTime = Date.now();
    let d = {
      startTime,
      endTime,
      value: totalCIValue / totalCIcnt,
    };

    attentionRef.update({
      attentions: firebase.firestore.FieldValue.arrayUnion(d),
    });
    startTime = null;
  }
}

export default decide;
