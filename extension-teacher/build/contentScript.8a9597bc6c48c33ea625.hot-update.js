"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/modules/Student.jsx":
/*!***********************************************!*\
  !*** ./src/pages/Content/modules/Student.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _student_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.module.css */ "./src/pages/Content/modules/student.module.css");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../firebase */ "./firebase.js");





let students_presents = {};
const SingleStudent = ({
  student
}) => {
  const [CI, setCI] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _firebase__WEBPACK_IMPORTED_MODULE_2__.rdb.ref(student.uid).on("value", snap => {
      setCI(snap.val());
    });
  }, []);
  console.log("sd", student);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].cardStudent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].textfieldStudent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].imageClass,
    src: student.photo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].studentName
  }, student.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].studentName
  }, student.reg)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].progress
  }, (Math.round(CI * 100) / 100).toFixed(2), "%"));
};
const Students = ({
  classID,
  setShow
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [student_ids, setStudent_ids] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    student_ids.forEach(id => {
      _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection("users").doc(id).get().then(st => {
        let di = {
          name: st.get("name"),
          reg: st.get("reg"),
          photo: st.get("photo"),
          uid: id
        };
        console.log("Sss", di);
        setStudents(pre => {
          return [...pre, di];
        });
      });
    });
  }, [student_ids]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection("classes").doc(classID).onSnapshot(doc => {
      let data = doc.data();
      console.log(data);
      let attentions = data.attentions;
      for (let i = 0; i < attentions.length; i++) {
        let at_id = attentions[i];
        _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection("attentions").doc(at_id).get().then(d => {
          let sid = d.get("student");
          if (!students_presents[sid]) {
            students_presents[sid] = true;
            console.log("here", sid);
            setStudent_ids(pre => {
              return [...pre, sid];
            });
          }
        });
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].homeContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].innerContainer
  }, students.map((student, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SingleStudent, {
      student: student,
      key: index
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => setShow(false),
    className: _student_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].signoutButton
  }, "HIDE"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Students);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4aa140aefd6af5ba1939")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.8a9597bc6c48c33ea625.hot-update.js.map