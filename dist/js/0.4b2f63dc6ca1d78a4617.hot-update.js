webpackHotUpdate(0,{

/***/ "./src/list/singleton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataList;
/* unused harmony export getSearchList */
/* unused harmony export render */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajax__ = __webpack_require__("./src/util/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_listItem__ = __webpack_require__("./src/view/listItem.js");




//获取整个知识列表
function getDataList(list) {
    return __WEBPACK_IMPORTED_MODULE_0__util_ajax__["a" /* ajax */].request({url: '/getData/dataList'})
        .then(function (contents) {
            list.dataList = contents;
            // console.log(contents);
        }, function (err) {
            console.error(err);
        });
}

//通过title或者tags进行知识查询
function getSearchList(query, list) {
    return __WEBPACK_IMPORTED_MODULE_0__util_ajax__["a" /* ajax */].request({url: '/getData/search', args: query})
        .then(function (contents) {
            list.searchList = contents;
        },function (err) {
            console.error(err);
        });
}


function render(dataList) {
    //dataList ---array
    let list = document.createElement('ul');
    for (let knowledge of dataList) {
        list.innerHTML += Object(__WEBPACK_IMPORTED_MODULE_1__view_listItem__["a" /* generateListItem */])(knowledge);
    }
    return list;
}



/***/ }),

/***/ "./src/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_singleton__ = __webpack_require__("./src/list/singleton.js");


let list = {};

Object(__WEBPACK_IMPORTED_MODULE_0__list_singleton__["a" /* getDataList */])(list)
    .then(function (contents) {
        console.log(list.dataList);
        // render(list.dataList);
        // console.log(list.dataList);
    }, function (err) {
        console.error(err);
    });



/***/ })

})