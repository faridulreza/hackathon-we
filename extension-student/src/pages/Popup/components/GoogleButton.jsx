import React from "react";
import { useState } from "react";
import Gbutton from "react-google-button";

function signIn(reg) {
  chrome.runtime.sendMessage({ signIn: true, reg });
}

const GoogleButton = () => {
  const [reg, setReg] = useState(null);
  return (
    <div style={{ width: "100%", height: "100%", paddingTop: "100px" }}>
      <input
        type="text"
        onChange={(e) => setReg(e.target.value)}
        placeholder="Registration no"
      ></input>
      <br></br>
      {reg && <Gbutton onClick={() => signIn(reg)} />}
    </div>
  );
};

export default GoogleButton;
