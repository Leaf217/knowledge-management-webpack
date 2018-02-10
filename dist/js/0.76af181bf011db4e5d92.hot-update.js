webpackHotUpdate(0,{

/***/ "./src/images/Star-1.png":
false,

/***/ "./src/images/Trash.png":
false,

/***/ "./src/list/singleton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataList;
/* unused harmony export getSearchList */
/* harmony export (immutable) */ __webpack_exports__["b"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajax__ = __webpack_require__("./src/util/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_listItem__ = __webpack_require__("./src/view/listItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_listItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__view_listItem__);



//获取整个知识列表
function getDataList(list) {
    return __WEBPACK_IMPORTED_MODULE_0__util_ajax__["a" /* ajax */].request({ url: '/getData/dataList' }).then(function (contents) {
        list.dataList = contents;
        // console.log(contents);
    }, function (err) {
        console.error(err);
    });
}

//通过title或者tags进行知识查询
function getSearchList(query, list) {
    return __WEBPACK_IMPORTED_MODULE_0__util_ajax__["a" /* ajax */].request({ url: '/getData/search', args: query }).then(function (contents) {
        list.searchList = contents;
    }, function (err) {
        console.error(err);
    });
}

function render(dataList) {
    //dataList ---array
    let list = document.createElement('ul');
    for (let knowledge of dataList) {
        list.innerHTML += Object(__WEBPACK_IMPORTED_MODULE_1__view_listItem__["generateListItem"])(knowledge);
    }
    return list;
}

/***/ }),

/***/ "./src/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_singleton__ = __webpack_require__("./src/list/singleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_listItem__ = __webpack_require__("./src/view/listItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_listItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__view_listItem__);



console.log(__WEBPACK_IMPORTED_MODULE_1__view_listItem__["star"], __WEBPACK_IMPORTED_MODULE_1__view_listItem__["trash"]);
let list = {};

Object(__WEBPACK_IMPORTED_MODULE_0__list_singleton__["a" /* getDataList */])(list).then(function (contents) {
    // for (let a of list.dataList) {
    //     console.log(a.get("tags"));
    // }
    Object(__WEBPACK_IMPORTED_MODULE_0__list_singleton__["b" /* render */])(list.dataList);
    // console.log(list.dataList);
}, function (err) {
    console.error(err);
});

/***/ }),

/***/ "./src/view/listItem.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (14:19)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m        \u001b[36mfor\u001b[39m (let i \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39mi \u001b[33m<\u001b[39m knowledge\u001b[33m.\u001b[39mget(\u001b[32m\"evaluation\"\u001b[39m)\u001b[33m;\u001b[39mi\u001b[33m++\u001b[39m) {\n \u001b[90m 13 | \u001b[39m            let \n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m             stars \u001b[33m+=\u001b[39m \u001b[32m`<img src=\"../../dist/js/${star}\" alt=\"star\" class=\"eva-img\">`\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m        }\n \u001b[90m 16 | \u001b[39m        \u001b[36mreturn\u001b[39m  stars\u001b[33m;\u001b[39m\n \u001b[90m 17 | \u001b[39m    }\u001b[0m\n");

/***/ })

})