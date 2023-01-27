import startAnalysis from "./modules/CIgetter";

//observe for tab change
//TODO::

//wait for the candidate to engage
function waitForStart(meet_code) {
  let ahref = document.querySelector("a[data-present-landing=false]");

  if (!ahref) {
    startAnalysis();
  } else {
    setTimeout(() => waitForStart(meet_code), 500);
  }
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg?.start_observing) waitForStart(msg.classID);
});
