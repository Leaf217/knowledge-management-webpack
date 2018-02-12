webpackHotUpdate(0,{

/***/ "./src/images/Trash.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "34525caf78a447663e194e3e720f89f7.png";

/***/ }),

/***/ "./src/view/listItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateListItem;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_Star_1_png__ = __webpack_require__("./src/images/Star-1.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_Star_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_Star_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_Trash_png__ = __webpack_require__("./src/images/Trash.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_Trash_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__images_Trash_png__);



function generateListItem(knowledge) {

    //觉得这个循环应该写在listItem里，但又没想好怎么写
    function generateStars(knowledge) {
        let stars = '';
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