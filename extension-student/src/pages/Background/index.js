import { rdb, auth, db, firebase } from "../../../firebase";

const dispatch = (data) => {
  console.log(data);
};

const createTab = (url) => {};
const createNewWindow = () => {
  chrome.windows.create(
    {
      url: "popup.html",
      type: "popup",
      width: 420,
      height: 600,
    },
    function (window) {
      chrome.storage.local.set({ w_id: window.id });
    }
  );
};

const open_or_focus = () => {
  chrome.storage.local.get("w_id", (res) => {
    if (!res.w_id) {
      createNewWindow();
      return;
    }

    chrome.windows.get(res.w_id, (w) => {
      if (w) chrome.windows.update(w.id, { focused: true });
      else createNewWindow();
    });
  });
};

chrome.action.onClicked.addListener(open_or_focus);

const signInWithPopup = (reg) => {
  //bug does not forgets selected account https://groups.google.com/a/chromium.org/g/chromium-extensions/c/4OX3cv_wepY

  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    dispatch(token);
    chrome.identity.removeCachedAuthToken({ token: token }, function () {});
    let credential = firebase.auth.GoogleAuthProvider.credential(null, token);

    auth
      .signInWithCredential(credential)
      .then((userCredential) => {
        let user = firebase.auth().currentUser;
        user = user.multiFactor.user;

        let d = {
          reg,
          photo: user.photoURL,
          name: user.displayName,
          email: user.email,
          attentions: firebase.firestore.FieldValue.arrayUnion(""),
        };
        dispatch(d);
        dispatch(user);

        db.collection("users").doc(user.uid).set(d, { merge: true });
      })
      .catch((error) => {
        dispatch(error);
      });
  });
};

const signOut = () => {
  auth.signOut();
};

//------------join meeting--------------------------

const joinMeeting = (meet_code, uid, classID) => {
  // let meet_code = url_.split("/");
  // meet_code = meet_code.length >= 3 ? meet_code[2] : "empty";

  chrome.tabs.create({ url: "https://meet.google.com/" + meet_code }, (tab) => {
    //start content script in this tab
    setTimeout(
      () =>
        chrome.tabs.sendMessage(tab.id, {
          start_observing: true,
          uid,
          classID,
        }),
      3000
    );
  });
};

//----------end of join meeting---------------------

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  console.log(msg);
  if (msg?.signIn) signInWithPopup(msg.reg);
  if (msg === "add_url") open_or_focus();
  if (msg === "signOut") signOut();
  if (msg?.joinMeeting) joinMeeting(msg.meet_code, msg.uid, msg.classID);
});
