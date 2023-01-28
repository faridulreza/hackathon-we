import { auth, firebase } from "../../../firebase";

const dispatch = (data) => {
  console.log(data);
};

const createNewWindow = () => {
  chrome.windows.create(
    {
      url: "popup.html",
      type: "popup",
      width: 420,
      height: 650,
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

const signInWithPopup = () => {
  //bug does not forgets selected account https://groups.google.com/a/chromium.org/g/chromium-extensions/c/4OX3cv_wepY

  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    dispatch(token);
    chrome.identity.removeCachedAuthToken({ token: token }, function () {});
    let credential = firebase.auth.GoogleAuthProvider.credential(null, token);

    auth
      .signInWithCredential(credential)
      .then((userCredential) => {
        const user = firebase.auth().currentUser;
        dispatch(user);
      })
      .catch((error) => {
        dispatch(error);
      });
  });
};

const signOut = () => {
  auth.signOut();
};

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  console.log(msg);
  if (msg === "signIn") signInWithPopup();
  if (msg === "add_url") open_or_focus();
  if (msg === "signOut") signOut();
});
