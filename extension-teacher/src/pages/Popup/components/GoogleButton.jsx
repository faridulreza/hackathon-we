import React from "react";
import { useState } from "react";
import Gbutton from "react-google-button";

function signIn() {
  chrome.runtime.sendMessage("signIn");
}

const GoogleButton = () => {
  const [reg, setReg] = useState(null);
  return (
    <div style={{ width: "100%", height: "100%", paddingTop: "100px" }}>
      <br></br>
      {reg && <Gbutton onClick={() => signIn(reg)} />}
    </div>
  );
};

export default GoogleButton;
