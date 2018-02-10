webpackHotUpdate(0,{

/***/ "./src/list/singleton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataList;
/* unused harmony export getSearchList */
/* harmony export (immutable) */ __webpack_exports__["b"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajax__ = __webpack_require__("./src/util/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_listItem__ = __webpack_require__("./src/view/listItem.js");



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_listItem__ = __webpack_require__("./src/view/listItem.js");



console.log(__WEBPACK_IMPORTED_MODULE_1__view_listItem__["b" /* star */], __WEBPACK_IMPORTED_MODULE_1__view_listItem__["c" /* trash */]);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateListItem;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_Star_1_png__ = __webpack_require__("./src/images/Star-1.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_Star_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_Star_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_Trash_png__ = __webpack_require__("./src/images/Trash.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_Trash_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__images_Trash_png__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__images_Star_1_png___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__images_Trash_png___default.a; });





function generateListItem(knowledge) {

    //觉得这个循环应该写在listItem里，但又没想好怎么写
    let stars = '';
    function generateStars(knowledge) {
        for (let i = 0; i < knowledge.get("evaluation"); i++) {
            stars += `<img src=${__WEBPACK_IMPORTED_MODULE_0__images_Star_1_png___default.a} alt="star" class="eva-img">`;
        }
        return stars;
    }

    let tags = '';
    function generateTags(knowledge) {
        for (let tag of knowledge.get("tags")) {
            if (!(tag.replace(/(^s*)|(s*$)/g, "").length == 0 || isNull(tag))) {
                tags += `<span class="tag">${tag}</span>`;
            }
        }
    }

    function isNull(str) {
        if (str === "") return true; //完全空
        let regular = "^[ ]+$"; //^ 起始符，$ 结束符，+ 多个, [ ] 空格
        let re = new RegExp(regular);
        return re.test(str);
    }

    return `<li class="item">
                <h3><a href="" class="tit-url">${knowledge.get("title")}</a></h3>
                <dl>
                    <dt>学习进度</dt>
                    <dd>
                        <span class="progress-bar"></span>
                        <span>${knowledge.get("progress")} %</span>
                    </dd>
                    
                    <dt>知识评价</dt>
                    <dd>${generateStars(knowledge)}</dd>
                    
                    <dt>学习笔记</dt>
                    <dd>
                        <p class="notes-con">${knowledge.get("notes")}</p>
                        <a href="#" class="view-more">view more</a>
                    </dd>
                    
                    <dt>标签</dt>
                    <dd>${generateTags(knowledge)}</dd>
                </dl>
               <img src=${__WEBPACK_IMPORTED_MODULE_1__images_Trash_png___default.a} alt="trash" class="trash">
            </li>`;
}

/***/ })

})