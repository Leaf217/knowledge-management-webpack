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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_singleton__ = __webpack_require__(1);


let list = {};

Object(__WEBPACK_IMPORTED_MODULE_0__list_singleton__["a" /* getDataList */])(list)
    .then(function (contents) {
        console.log(list.dataList);
    }, function (err) {
        console.error(err);
    });



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataList;
/* unused harmony export getSearchList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajax__ = __webpack_require__(2);



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






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dao__ = __webpack_require__(3);


//url与调用方法的映射关系
let mapping = new Map([
    ["/getData/dataList", __WEBPACK_IMPORTED_MODULE_0__data_dao__["a" /* getData */].getDataList],
    ["/getData/id", __WEBPACK_IMPORTED_MODULE_0__data_dao__["a" /* getData */].getKnowledgeById],
    ["/getData/search", __WEBPACK_IMPORTED_MODULE_0__data_dao__["a" /* getData */].searchKnowledge]
]);

let ajax = new class {
  constructor(mapping) {
      this.mapping = mapping;
  }

  request(option) {
      return new Promise(((resolve) => {
          resolve(this.mapping.get(option.url).call(__WEBPACK_IMPORTED_MODULE_0__data_dao__["a" /* getData */], option.args));
      }))
  }

}(mapping);




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__konwledgeData__ = __webpack_require__(4);


let getData = new class {
    constructor(data) {
        this.dataList = data;
    }

    //获取整个知识列表，一个数组包含多个Map，每个Map是一个konwledge
    getDataList() {
        return this.dataList;
    }

    //通过id获取某个knowledge
    getKnowledgeById(id) {
        // for (let i = 0; i < this.dataList.length;i++) {
        //     if (this.dataList[i].get("id") === id) {
        //         return this.dataList[i];
        //     }
        // }
        for (let value of this.dataList) {
            if (value.get("id") === id) {
                return value;
            }
        }
    }

    //通过input，搜索能够匹配title或者tags的knowledge
    searchKnowledge(input) {
        let matching = [];
        for (let value of this.dataList) {
            let comparison = value.get("title") + ' ' + value.get("tags").join(' ');
            // comparison = comparison.toLowerCase();
            if (~comparison.indexOf(input)) {
                matching.push(value);
            }
        }
        return matching;
    }



    // getDataList() {
    //     return new Promise((resolve, reject) => {
    //             resolve(this.dataList);
    //         });
    // }


    // getKnowledgeById(id) {
    //     return this.getDataList()
    //         .then(
    //             data => {
    //                 let knowledge;
    //                 data.forEach(value => {
    //                 if (value.get("id") === id) {
    //                     knowledge = value;
    //                 }
    //                 return knowledge;
    //             });
    //         });
    // }

    
}(Object(__WEBPACK_IMPORTED_MODULE_0__konwledgeData__["a" /* knowledgeData */])());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = knowledgeData;

function knowledgeData() {
    let knowledgeData =[];

    let initialKnowledge = [
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

    for (let knowledge of initialKnowledge) {
        knowledgeData.push(new Map(knowledge));
    }

    return knowledgeData;
}





/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGI4MTdhOTg2NDVjM2E5YjkwNGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Qvc2luZ2xldG9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGFvLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2tvbndsZWRnZURhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7O0FDVFE7OztBQUdiO0FBQ0E7QUFDQSw2RUFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsNkVBQXlCLG9DQUFvQztBQUM3RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOzs7Ozs7Ozs7Ozs7OztBQ3RCZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcEJxQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEI7OztBQUdBLENBQUM7Ozs7Ozs7Ozs7O0FDOUREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRiODE3YTk4NjQ1YzNhOWI5MDRlIiwiaW1wb3J0IHtnZXREYXRhTGlzdH0gZnJvbSBcIi4vbGlzdC9zaW5nbGV0b25cIjtcblxubGV0IGxpc3QgPSB7fTtcblxuZ2V0RGF0YUxpc3QobGlzdClcbiAgICAudGhlbihmdW5jdGlvbiAoY29udGVudHMpIHtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdC5kYXRhTGlzdCk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthamF4fSBmcm9tIFwiLi4vdXRpbC9hamF4XCI7XG5cblxuLy/ojrflj5bmlbTkuKrnn6Xor4bliJfooahcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhTGlzdChsaXN0KSB7XG4gICAgcmV0dXJuIGFqYXgucmVxdWVzdCh7dXJsOiAnL2dldERhdGEvZGF0YUxpc3QnfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICBsaXN0LmRhdGFMaXN0ID0gY29udGVudHM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50cyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG59XG5cbi8v6YCa6L+HdGl0bGXmiJbogIV0YWdz6L+b6KGM55+l6K+G5p+l6K+iXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoTGlzdChxdWVyeSwgbGlzdCkge1xuICAgIHJldHVybiBhamF4LnJlcXVlc3Qoe3VybDogJy9nZXREYXRhL3NlYXJjaCcsIGFyZ3M6IHF1ZXJ5fSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICBsaXN0LnNlYXJjaExpc3QgPSBjb250ZW50cztcbiAgICAgICAgfSxmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xufVxuXG5cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saXN0L3NpbmdsZXRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dldERhdGF9IGZyb20gXCIuLi9kYXRhL2Rhb1wiO1xuXG4vL3VybOS4juiwg+eUqOaWueazleeahOaYoOWwhOWFs+ezu1xubGV0IG1hcHBpbmcgPSBuZXcgTWFwKFtcbiAgICBbXCIvZ2V0RGF0YS9kYXRhTGlzdFwiLCBnZXREYXRhLmdldERhdGFMaXN0XSxcbiAgICBbXCIvZ2V0RGF0YS9pZFwiLCBnZXREYXRhLmdldEtub3dsZWRnZUJ5SWRdLFxuICAgIFtcIi9nZXREYXRhL3NlYXJjaFwiLCBnZXREYXRhLnNlYXJjaEtub3dsZWRnZV1cbl0pO1xuXG5sZXQgYWpheCA9IG5ldyBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKG1hcHBpbmcpIHtcbiAgICAgIHRoaXMubWFwcGluZyA9IG1hcHBpbmc7XG4gIH1cblxuICByZXF1ZXN0KG9wdGlvbikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUodGhpcy5tYXBwaW5nLmdldChvcHRpb24udXJsKS5jYWxsKGdldERhdGEsIG9wdGlvbi5hcmdzKSk7XG4gICAgICB9KSlcbiAgfVxuXG59KG1hcHBpbmcpO1xuXG5cbmV4cG9ydCB7YWpheH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbC9hamF4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7a25vd2xlZGdlRGF0YX0gZnJvbSBcIi4va29ud2xlZGdlRGF0YVwiO1xuXG5sZXQgZ2V0RGF0YSA9IG5ldyBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YTtcbiAgICB9XG5cbiAgICAvL+iOt+WPluaVtOS4quefpeivhuWIl+ihqO+8jOS4gOS4quaVsOe7hOWMheWQq+WkmuS4qk1hcO+8jOavj+S4qk1hcOaYr+S4gOS4qmtvbndsZWRnZVxuICAgIGdldERhdGFMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhTGlzdDtcbiAgICB9XG5cbiAgICAvL+mAmui/h2lk6I635Y+W5p+Q5Liqa25vd2xlZGdlXG4gICAgZ2V0S25vd2xlZGdlQnlJZChpZCkge1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YUxpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZGF0YUxpc3RbaV0uZ2V0KFwiaWRcIikgPT09IGlkKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUxpc3RbaV07XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmdldChcImlkXCIpID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6YCa6L+HaW5wdXTvvIzmkJzntKLog73lpJ/ljLnphY10aXRsZeaIluiAhXRhZ3PnmoRrbm93bGVkZ2VcbiAgICBzZWFyY2hLbm93bGVkZ2UoaW5wdXQpIHtcbiAgICAgICAgbGV0IG1hdGNoaW5nID0gW107XG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGxldCBjb21wYXJpc29uID0gdmFsdWUuZ2V0KFwidGl0bGVcIikgKyAnICcgKyB2YWx1ZS5nZXQoXCJ0YWdzXCIpLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIC8vIGNvbXBhcmlzb24gPSBjb21wYXJpc29uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAofmNvbXBhcmlzb24uaW5kZXhPZihpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2hpbmc7XG4gICAgfVxuXG5cblxuICAgIC8vIGdldERhdGFMaXN0KCkge1xuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJlc29sdmUodGhpcy5kYXRhTGlzdCk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9XG5cblxuICAgIC8vIGdldEtub3dsZWRnZUJ5SWQoaWQpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YUxpc3QoKVxuICAgIC8vICAgICAgICAgLnRoZW4oXG4gICAgLy8gICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBrbm93bGVkZ2U7XG4gICAgLy8gICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5nZXQoXCJpZFwiKSA9PT0gaWQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGtub3dsZWRnZSA9IHZhbHVlO1xuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBrbm93bGVkZ2U7XG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICBcbn0oa25vd2xlZGdlRGF0YSgpKTtcblxuZXhwb3J0IHtnZXREYXRhfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXRhL2Rhby5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmV4cG9ydCBmdW5jdGlvbiBrbm93bGVkZ2VEYXRhKCkge1xuICAgIGxldCBrbm93bGVkZ2VEYXRhID1bXTtcblxuICAgIGxldCBpbml0aWFsS25vd2xlZGdlID0gW1xuICAgICAgICBbXG4gICAgICAgICAgICBbXCJpZFwiLCAxXSxcbiAgICAgICAgICAgIFtcInRpdGxlXCIsIFwi5YWz5LqOZmxvYXTnmoTpgqPkupvkuovlhL9cIl0sXG4gICAgICAgICAgICBbXCJVUkxcIiwgXCJodHRwOi8vd3d3Lnczc2Nob29sLmNvbS5jbi9jc3NyZWYvcHJfY2xhc3NfZmxvYXQuYXNwXCJdLFxuICAgICAgICAgICAgW1wicHJvZ3Jlc3NcIiwgMTAwXSxcbiAgICAgICAgICAgIFtcImV2YWx1YXRpb25cIiwgM10sXG4gICAgICAgICAgICBbXCJub3Rlc1wiLCBcIuWFs+S6jmZsb2F055qE6YKj5Lqb5LqL5YS/5YWz5LqOZmxvYXTnmoTpgqPkupvkuovlhL/lhbPkuo5mbG9hdOeahOmCo+S6m+S6i+WEv+WFs+S6jmZsb2F055qE6YKj5Lqb5LqL5YS/5YWz5LqOZmxvYXTnmoTpgqPkupvkuovlhL/lhbPkuo5mbG9hdOeahOmCo+S6m+S6i+WEv1wiXSxcbiAgICAgICAgICAgIFtcInRhZ3NcIiwgWzEsIDIsIDNdXVxuICAgICAgICBdLCBbXG4gICAgICAgICAgICBbXCJpZFwiLCAyXSxcbiAgICAgICAgICAgIFtcInRpdGxlXCIsIFwicG9zaXRpb27nn6XlpJrlsJFcIl0sXG4gICAgICAgICAgICBbXCJVUkxcIiwgXCJodHRwOi8vd3d3Lnczc2Nob29sLmNvbS5jbi9jc3NyZWYvcHJfY2xhc3NfcG9zaXRpb24uYXNwXCJdLFxuICAgICAgICAgICAgW1wicHJvZ3Jlc3NcIiwgNzVdLFxuICAgICAgICAgICAgW1wiZXZhbHVhdGlvblwiLCA0XSxcbiAgICAgICAgICAgIFtcIm5vdGVzXCIsIFwicG9zaXRpb27nn6XlpJrlsJFwb3NpdGlvbuefpeWkmuWwkXBvc2l0aW9u55+l5aSa5bCRcG9zaXRpb27nn6XlpJrlsJFwb3NpdGlvbuefpeWkmuWwkXBvc2l0aW9u55+l5aSa5bCRcG9zaXRpb27nn6XlpJrlsJFwb3NpdGlvbuefpeWkmuWwkXBvc2l0aW9u55+l5aSa5bCRXCJdLFxuICAgICAgICAgICAgW1widGFnc1wiLCBbMSwgMl1dXG4gICAgICAgIF0sIFtcbiAgICAgICAgICAgIFtcImlkXCIsIDNdLFxuICAgICAgICAgICAgW1widGl0bGVcIiwgXCIxMjExZ2ZkaGZubmRoZGZoZGZnZmRcIl0sXG4gICAgICAgICAgICBbXCJVUkxcIiwgXCJodHRwOi8vd3d3Lnczc2Nob29sLmNvbS5jbi9jc3NyZWYvcHJfY2xhc3NfcG9zaXRpb24uYXNwXCJdLFxuICAgICAgICAgICAgW1wicHJvZ3Jlc3NcIiwgNjZdLFxuICAgICAgICAgICAgW1wiZXZhbHVhdGlvblwiLCAyXSxcbiAgICAgICAgICAgIFtcIm5vdGVzXCIsIFwiZ2ZnaXRpb25nZGZnZmRoNDIzNTY1NzY2NTQ0MzV1NnV5dXlkaGZqeXJkamZqeXJkaGh2anRkeXJkaGhtdmpkaGhtdmh0aGhnY2h2anlobWh2anloZGdtaHZoeWVkdGpmaGp5eWVkdGp5a2tmdXV5c2p4XCJdLFxuICAgICAgICAgICAgW1widGFnc1wiLCBbMiwgM11dXG4gICAgICAgIF1cbiAgICBdO1xuXG4gICAgZm9yIChsZXQga25vd2xlZGdlIG9mIGluaXRpYWxLbm93bGVkZ2UpIHtcbiAgICAgICAga25vd2xlZGdlRGF0YS5wdXNoKG5ldyBNYXAoa25vd2xlZGdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtub3dsZWRnZURhdGE7XG59XG5cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXRhL2tvbndsZWRnZURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==