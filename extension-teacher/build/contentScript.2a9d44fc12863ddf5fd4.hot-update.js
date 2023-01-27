self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ (() => {

function attentionSeeker(track) {
  let image = new ImageCapture(track);
  image.takePhoto().then(blob => {});
}

navigator.mediaDevices.getUserMedia({
  video: true
}).then(stream => {
  console.log("Got Permission");
  attentionSeeker(track.getVideoTracks()[0]);
}).catch(err => {
  console.log(err);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8817c96becfba6c1a308")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.2a9d44fc12863ddf5fd4.hot-update.js.map