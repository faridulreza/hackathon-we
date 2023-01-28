//detect if this meetlink is class that was created;

import { rdb } from "../../../firebase";
import startMonitoring from "./modules/monitor";

function askpromt(code, classID) {
  let yes = confirm("Do you want to start monitoring the class with peekaboo?");

  if (yes) {
    rdb.ref(code).set(classID);
    startMonitoring(classID);
    return true;
  }

  return false;
}

//entry point
let url = window.location.href;
url = url.split("/");

if (url.length > 3) {
  let code = url[3];

  chrome.storage.local.get([code], (val) => {
    if (val[code]) {
      setTimeout(() => askpromt(code, val[code]), 3000);
    }
  });
}
