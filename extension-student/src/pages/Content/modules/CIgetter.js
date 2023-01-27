import decide from "./decider";

const INTERVAL = 500; //ms

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
      "http://127.0.0.1:5000/api/v1/predict/";
    var method = "POST";
    var xhr = createCORSRequest(method, url);

    xhr.onload = function () {
      // Success code goes here.
    };

    xhr.onerror = function () {
      // Error code goes here.
    };

    xhr.onreadystatechange=function(){
      if(xhr.readyState == XMLHttpRequest.DONE){
        let data = JSON.parse(xhr.responseText);
        decide(data.res);
      }
    }

    //xhr.setRequestHeader("mode", "no-cors");
    let d = JSON.stringify({image:base64data});
    xhr.send(d);
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
