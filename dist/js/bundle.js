/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dao__ = __webpack_require__(1);

// import * as data from '../server/mock.js';
// console.log(data.getData());



console.log(__WEBPACK_IMPORTED_MODULE_0__data_dao__["a" /* data */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__konwledgeData__ = __webpack_require__(2);


let data = function () {
    return __WEBPACK_IMPORTED_MODULE_0__konwledgeData__["a" /* knowledgeData */];
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = knowledgeData;
function knowledgeData() {
    let knowledgeData =[];

    let knowledgeList = [
        [
            ["id", 1],
            ["title", "关于float的那些事儿"],
            ["URL", "http://www.w3school.com.cn/cssref/pr_class_float.asp"],
            ["progress", 100],
            ["evaluation", 3],
            ["notes", "关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿"],
            ["tags", [1, 2, 3]]
        ], [
            ["id", 2],
            ["title", "position知多少"],
            ["URL", "http://www.w3school.com.cn/cssref/pr_class_position.asp"],
            ["progress", 75],
            ["evaluation", 4],
            ["notes", "position知多少position知多少position知多少position知多少position知多少position知多少position知多少position知多少position知多少"],
            ["tags", [1, 2]]
        ], [
            ["id", 3],
            ["title", "1211gfdhfnndhdfhdfgfd"],
            ["URL", "http://www.w3school.com.cn/cssref/pr_class_position.asp"],
            ["progress", 66],
            ["evaluation", 2],
            ["notes", "gfgitiongdfgfdh42356576654435u6uyuydhfjyrdjfjyrdhhvjtdyrdhhmvjdhhmvhthhgchvjyhmhvjyhdgmhvhyedtjfhjyyedtjykkfuuysjx"],
            ["tags", [2, 3]]
        ]
    ];

    for (let knowledge of knowledgeList) {
        knowledgeData.push(new Map(knowledge));
    }

    return knowledgeData;
}





/***/ })
/******/ ]);