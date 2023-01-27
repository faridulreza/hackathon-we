"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/modules/CIgetter.js":
/*!***********************************************!*\
  !*** ./src/pages/Content/modules/CIgetter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _decider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decider */ "./src/pages/Content/modules/decider.js");

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

    var url = "https://c390-2400-a7c0-8000-b-1bf0-5fac-5ddd-b3b1.in.ngrok.io/api/v1/predict";
    var method = "POST";
    var xhr = createCORSRequest(method, url);

    xhr.onload = function () {// Success code goes here.
    };

    xhr.onerror = function () {// Error code goes here.
    };

    xhr.setRequestHeader("mode", "no-cors");
    xhr.send(JSON.stringify({
      images: base64data
    }));
  } catch (e) {
    console.log(e);
    (0,_decider__WEBPACK_IMPORTED_MODULE_0__["default"])(0);
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
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(stream => {
    console.log("Got Permission");
    video.srcObject = stream;
    video.play();
    attentionMonitor();
  }).catch(err => {
    console.log(err);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startAnalysis);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6dcff859516cb91964f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.acb79b279ecd72267033.hot-update.js.map