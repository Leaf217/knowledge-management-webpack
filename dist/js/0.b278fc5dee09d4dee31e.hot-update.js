webpackHotUpdate(0,{

/***/ "./src/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_singleton__ = __webpack_require__("./src/list/singleton.js");


let list = {};

Object(__WEBPACK_IMPORTED_MODULE_0__list_singleton__["a" /* getDataList */])(list)
    .then(function (contents) {
        console.log(list.dataList.tags);
        // render(list.dataList);
        // console.log(list.dataList);
    }, function (err) {
        console.error(err);
    });



/***/ })

})