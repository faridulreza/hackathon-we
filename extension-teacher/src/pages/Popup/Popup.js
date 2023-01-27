import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { auth, db, firebase } from "../../../firebase";
import GoogleButton from "./components/GoogleButton";
import Home from "./components/Home";
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
      {userDetails && <Home />}
      {!userDetails && <GoogleButton />}
    </div>
  );
};

export default Popup;
