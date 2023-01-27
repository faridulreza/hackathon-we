"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Popup/components/Home.jsx":
/*!*********************************************!*\
  !*** ./src/pages/Popup/components/Home.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function signOut() {
  chrome.runtime.sendMessage("signOut");
}

const Home = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: "100%",
      height: "100%"
    }
  }, "\"signed up\" ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: signOut
  }, " signout"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ded2877b2899f1ff925a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.4da41c786e6aa01e1b63.hot-update.js.map