import React from "react";
import { useState } from "react";
import Gbutton from "react-google-button";

function signIn() {
  chrome.runtime.sendMessage("signIn");
}

const GoogleButton = () => {
  return (
    <div style={{ width: "100%", height: "100%", paddingTop: "100px" }}>
      <br></br>
      <Gbutton onClick={() => signIn()} />
    </div>
  );
};

export default GoogleButton;
