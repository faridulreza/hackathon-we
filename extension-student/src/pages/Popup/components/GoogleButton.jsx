import React from "react";
import { useState } from "react";
import Gbutton from "react-google-button";
import "./reg.css";
function signIn(reg) {
  if (reg === null || reg.trim().length == 0) return;
  const registration = reg.trim();
  chrome.runtime.sendMessage({ signIn: true, reg: registration });
}

const GoogleButton = () => {
  const [reg, setReg] = useState(null);
  return (
    <div style={{ width: "100%", height: "100%", paddingTop: "100px" }}>
      <input
        type="text"
        onChange={(e) => setReg(e.target.value)}
        placeholder="Registration no"
      />
      <Gbutton style={{ marginTop: "20px" }} onClick={() => signIn(reg)} />
    </div>
  );
};

export default GoogleButton;
