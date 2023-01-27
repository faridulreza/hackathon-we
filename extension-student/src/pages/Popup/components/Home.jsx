import React from "react";
import { useState } from "react";
function signOut() {
  chrome.runtime.sendMessage("signOut");
}

const Home = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      "signed up" <button onClick={signOut}> signout</button>
    </div>
  );
};

export default Home;
