import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { auth, db, firebase } from "../../../firebase";
import "./Popup.css";

function signIn() {
  chrome.runtime.sendMessage("signIn");
}

function signOut() {
  chrome.runtime.sendMessage("signOut");
}

const Popup = () => {
  const [loadScreen, setLoadScreen] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUserDetails(user.multiFactor.user);
      } else {
        setUserDetails(null);
      }

      setLoadScreen(false);
    });
  }, []);

  return (
    <div id="app-body">
      {userDetails && (
        <div>
          {" "}
          "signed up" <button onClick={signOut}> signout</button>
        </div>
      )}
      {!userDetails && <button onClick={signIn}>signIn</button>}
    </div>
  );
};

export default Popup;
