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
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module.css */ "./src/pages/Popup/components/home.module.css");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _AddClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddClass */ "./src/pages/Popup/components/AddClass.js");
/* harmony import */ var _ProgressChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressChart */ "./src/pages/Popup/components/ProgressChart.js");






function signOut() {
  chrome.runtime.sendMessage("signOut");
}
const Home = () => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [addClick, setAddClick] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const handleClick = e => {
    e.preventDefault();
    setOpen(true);
    console.log(open);
  };
  const classes = [{
    name: "Networking",
    date: "2000-4-53"
  }, {
    name: "Networking",
    date: "2000-4-53"
  }, {
    name: "Networking",
    date: "2000-4-53"
  }, {
    name: "Networking",
    date: "2000-4-53"
  }, {
    name: "Networking",
    date: "2000-4-53"
  }, {
    name: "Networking",
    date: "2000-4-53"
  }, {
    name: "Networking",
    date: "2000-4-53"
  }, {
    name: "Networking",
    date: "2000-4-53"
  }];
  const students = [{
    name: "student Name",
    reg: "2003848904"
  }, {
    name: "student Name",
    reg: "2003848904"
  }, {
    name: "student Name",
    reg: "2003848904"
  }, {
    name: "student Name",
    reg: "2003848904"
  }, {
    name: "student Name",
    reg: "2003848904"
  }, {
    name: "student Name",
    reg: "2003848904"
  }, {
    name: "student Name",
    reg: "2003848904"
  }];
  const handleProgress = () => {
    setProgress(!progress);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !addClick ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].homeContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].innerContainer
  }, classes.map((cls, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].card,
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].textfield,
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].ppp
  }, " ", cls.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, cls.date))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].addButton,
    onClick: () => setAddClick(true)
  }, "Add Class"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].signoutButton
  }, "Sign Out")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddClass__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setAddClick: setAddClick
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillArrowLeftCircleFill, {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].arrow,
    onClick: () => setOpen(false)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].homeContainer
  }, !progress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgressChart__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].innerContainer
  }, students.map((student, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].cardStudent,
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].textfieldStudent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].studentName
  }, student.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].studentName
  }, student.reg)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].progress,
    onClick: handleProgress
  }, "75%")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].signoutButton
  }, "LogOut"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1bcfd80f98333bdc746e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.3339cdf9d8f81f3bbd2c.hot-update.js.map