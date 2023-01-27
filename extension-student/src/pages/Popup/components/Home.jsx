import React from "react";
import { useState } from "react";
import { rdb } from "../../../../firebase";
import style from "./home.module.css";
import "./reg.css";

function signOut() {
  console.log("here");
  chrome.runtime.sendMessage("signOut");
}

async function joinClass(meet_link, uid, callback) {
  meet_link = meet_link.split("/");
  meet_link = meet_link.length > 3 ? meet_link[3] : "";

  console.log(meet_link);
  if (!meet_link) return callback(true);

  rdb
    .ref(meet_link)
    .get()
    .then((e) => {
      if (e.exists()) {
        let classID = e.val();
        chrome.runtime.sendMessage({
          joinMeeting: true,
          meet_code: meet_link,
          classID,
          uid,
        });
        callback(false);
      } else {
        callback(true);
      }
    });
}

const Home = (props) => {
  const [meet_link, setMeetLink] = useState(
    "https://meet.google.com/abd-byzm-zmu"
  );
  const [freez, setFreeze] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        position: "relative",
      }}
    >
      <button
        onClick={signOut}
        style={{
          backgroundColor: "#600772ff",
          color: "white",
          padding: "4px",
          borderRadius: "4px",
          left: "90%",
          position: "absolute",
          marginBottom: "10px",
        }}
      >
        {" "}
        LogOut
      </button>

      <div
        style={{
          marginTop: "30px",
          display: "block",
        }}
      >
        <img
          src={props.details.photoURL}
          alt="Avatar"
          className={style.avatar}
          style={{ left: "30%", position: "relative" }}
        />
      </div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "0.9rem",
          marginTop: "1rem",
        }}
      >
        {props.details.displayName}
      </h2>

      <div style={{ display: "block", marginTop: "8px" }}>
        <input
          type="text"
          placeholder="Insert Meet Link"
          onChange={(e) => setMeetLink(e.target.value)}
          value={meet_link}
        />
        <br />
        <button
          disabled={freez}
          onClick={() => {
            const callback = (fail) => {
              if (fail) {
                setMeetLink("No classes found with this link");
                setFreeze(false);
              } else {
                setFreeze(false);
              }
            };

            setFreeze(true);

            joinClass(meet_link, props.details.uid, callback);
          }}
          style={{
            backgroundColor: "#600772ff",
            color: "white",
            padding: "4px",
            borderRadius: "4px",
            marginTop: "5px",
            position: "absolute",
            left: "40%",
          }}
        >
          Join Class
        </button>
      </div>
    </div>
  );
};

export default Home;
