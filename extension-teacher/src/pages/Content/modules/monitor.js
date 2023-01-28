import React from "react";
import { render } from "react-dom";
import { Fragment } from "react";
import ReactDOM from "react-dom";

import StatHome from "./stat";

export default async function startMonitoring(classID_) {
  let div = document.createElement("div");
  div.style.display = "flex";
  div.style.position = "absolute";
  div.style.top = "50px";
  div.style.right = "10px";
  document.body.append(div);
  div.id = "doc-root";

  setTimeout(
    () =>
      render(
        <StatHome classID={classID_} />,
        document.getElementById("doc-root")
      ),
    2000
  );
}
