/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/formHandler */ \"./src/client/js/formHandler.js\");\n/* harmony import */ var _js_nameChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/nameChecker */ \"./src/client/js/nameChecker.js\");\n\r\n\r\n\r\nconsole.log(_js_formHandler__WEBPACK_IMPORTED_MODULE_0__.handleSubmit);\r\nconsole.log(_js_nameChecker__WEBPACK_IMPORTED_MODULE_1__.checkForName);\r\n\r\nalert(\"starting point\");\r\n\n\n//# sourceURL=webpack://example-project/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleSubmit\": () => (/* binding */ handleSubmit)\n/* harmony export */ });\nfunction handleSubmit(event) {\r\n  event.preventDefault();\r\n\r\n  // check what text was put into the form field\r\n  let formText = document.getElementById(\"name\").value;\r\n  checkForName(formText);\r\n\r\n  console.log(\"::: Form Submitted :::\");\r\n  fetch(\"http://localhost:8080/test\")\r\n    .then((res) => res.json())\r\n    .then(function (res) {\r\n      document.getElementById(\"results\").innerHTML = res.message;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://example-project/./src/client/js/formHandler.js?");

/***/ }),

/***/ "./src/client/js/nameChecker.js":
/*!**************************************!*\
  !*** ./src/client/js/nameChecker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkForName\": () => (/* binding */ checkForName)\n/* harmony export */ });\nfunction checkForName(inputText) {\r\n  console.log(\"::: Running checkForName :::\", inputText);\r\n  let names = [\"Picard\", \"Janeway\", \"Kirk\", \"Archer\", \"Georgiou\"];\r\n\r\n  if (names.includes(inputText)) {\r\n    alert(\"Welcome, Captain!\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://example-project/./src/client/js/nameChecker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	
/******/ })()
;