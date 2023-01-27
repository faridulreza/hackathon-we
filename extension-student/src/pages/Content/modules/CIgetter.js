import decide from "./decider";

const INTERVAL = 5000; //ms

const video = document.createElement("video");
document.body.append(video);
const cnv = document.createElement("canvas"),
  ctx = cnv.getContext("2d");
document.body.append(ctx);

document.body.append(cnv);

async function loadCIndex(base64data) {
  try {
    var createCORSRequest = function (method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        // Most browsers.
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // IE8 & IE9
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // CORS not supported.
        xhr = null;
      }
      return xhr;
    };

    var url =
      "https://c390-2400-a7c0-8000-b-1bf0-5fac-5ddd-b3b1.in.ngrok.io/api/v1/predict";
    var method = "POST";
    var xhr = createCORSRequest(method, url);

    xhr.onload = function () {
      // Success code goes here.
    };

    xhr.onerror = function () {
      // Error code goes here.
    };

    xhr.setRequestHeader("mode", "no-cors");

    xhr.send(JSON.stringify({ images: base64data }));
  } catch (e) {
    console.log(e);
    decide(0);
  }
}

function attentionMonitor() {
  cnv.width = video.videoWidth;
  cnv.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  let data = cnv.toDataURL("image/png");
  data = data.split(",")[1];

  loadCIndex(data);

  setTimeout(attentionMonitor, INTERVAL);
}

function startAnalysis() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then((stream) => {
      console.log("Got Permission");
      video.srcObject = stream;
      video.play();
      attentionMonitor();
    })
    .catch((err) => {
      console.log(err);
    });
}

export default startAnalysis;
