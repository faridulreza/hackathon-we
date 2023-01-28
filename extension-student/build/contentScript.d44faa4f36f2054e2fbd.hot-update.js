"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/modules/decider.js":
/*!**********************************************!*\
  !*** ./src/pages/Content/modules/decider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setRefs": () => (/* binding */ setRefs),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../firebase */ "./firebase.js");

let startTime = null;
let endTime = null;
let totalCIValue = 0;
let totalCIcnt = 0;
let realtimeRef = null;
let attentionRef = null;

async function pushAttentionInterval() {}

async function setRefs(uid, attention_id) {
  realtimeRef = _firebase__WEBPACK_IMPORTED_MODULE_0__.rdb.ref(uid);
  attentionRef = _firebase__WEBPACK_IMPORTED_MODULE_0__.db.collection("attentions").doc(attention_id);
}

async function decide(CI) {
  if (startTime == null) {
    startTime = Date.now();
    totalCIValue = totalCIcnt = 0;
  }

  totalCIValue += CI;
  totalCIcnt++;
  let timePassed = Date.now() - startTime;
  realtimeRef.set(totalCIValue / totalCIcnt);

  if (timePassed >= 5 * 60 * 1000) {
    endTime = Date.now();
    let d = {
      startTime,
      endTime,
      value: totalCIValue / totalCIcnt
    };
    attentionRef.update({
      attentions: _firebase__WEBPACK_IMPORTED_MODULE_0__.firebase.firestore.FieldValue.arrayUnion(d)
    });
    startTime = null;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decide);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8cf27eb7a1609e3f5840")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.d44faa4f36f2054e2fbd.hot-update.js.map