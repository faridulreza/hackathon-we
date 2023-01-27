import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GoogleButton from "./components/GoogleButton";
import { auth, db, firebase } from "../../../firebase";
import "./Popup.css";
import Home from "./components/Home";

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
