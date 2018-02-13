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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _singleton = __webpack_require__(1);

var _renderHeader = __webpack_require__(8);

var list = {};
(0, _singleton.getDataList)(list).then(function (contents) {
  (0, _renderHeader.renderHeader)();
}, function (err) {
  console.error(err);
}).then(function (contents) {
  (0, _singleton.renderList)(list);
}, function (err) {
  console.error(err);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataList = getDataList;
exports.getSearchList = getSearchList;
exports.renderList = renderList;

var _ajax = __webpack_require__(2);

var _listItem = __webpack_require__(5);

//写的比较全
//获取整个知识列表
function getDataList(list) {
  return _ajax.ajax.request({
    url: '/getData/dataList'
  }).then(function (contents) {
    list.dataList = contents; // console.log(contents);
  }, function (err) {
    console.error(err);
  });
} //通过title或者tags进行知识查询


function getSearchList(query, list) {
  return _ajax.ajax.request({
    url: '/getData/search',
    args: query
  }).then(function (contents) {
    list.searchList = contents;
  }, function (err) {
    console.error(err);
  });
} //渲染列表


function renderList(dataList) {
  //dataList ---array
  var list = document.createElement('ul');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dataList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _knowledge = _step.value;
      list.innerHTML += (0, _listItem.generateListItem)(_knowledge);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.body.appendChild(list);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajax = void 0;

var _dao = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//url与调用方法的映射关系
var mapping = new Map([["/getData/dataList", _dao.getData.getDataList], ["/getData/id", _dao.getData.getKnowledgeById], ["/getData/search", _dao.getData.searchKnowledge]]);
var ajax = new (
/*#__PURE__*/
function () {
  function _class(mapping) {
    _classCallCheck(this, _class);

    this.mapping = mapping;
  }

  _createClass(_class, [{
    key: "request",
    value: function request(option) {
      var _this = this;

      return new Promise(function (resolve) {
        resolve(_this.mapping.get(option.url).call(_dao.getData, option.args));
      });
    }
  }]);

  return _class;
}())(mapping);
exports.ajax = ajax;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = void 0;

var _konwledgeData = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getData = new (
/*#__PURE__*/
function () {
  function _class(data) {
    _classCallCheck(this, _class);

    this.dataList = data;
  } //获取整个知识列表，一个数组包含多个Map，每个Map是一个konwledge


  _createClass(_class, [{
    key: "getDataList",
    value: function getDataList() {
      return this.dataList;
    } //通过id获取某个knowledge

  }, {
    key: "getKnowledgeById",
    value: function getKnowledgeById(id) {
      // for (let i = 0; i < this.dataList.length;i++) {
      //     if (this.dataList[i].get("id") === id) {
      //         return this.dataList[i];
      //     }
      // }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.dataList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _value = _step.value;

          if (_value.get("id") === id) {
            return _value;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } //通过input，搜索能够匹配title或者tags的knowledge

  }, {
    key: "searchKnowledge",
    value: function searchKnowledge(input) {
      var matching = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.dataList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _value2 = _step2.value;

          var comparison = _value2.get("title") + ' ' + _value2.get("tags").join(' '); // comparison = comparison.toLowerCase();


          if (~comparison.indexOf(input)) {
            matching.push(_value2);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return matching;
    } // getDataList() {
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

  }]);

  return _class;
}())((0, _konwledgeData.knowledgeData)());
exports.getData = getData;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knowledgeData = knowledgeData;

function knowledgeData() {
  var knowledgeData = [];
  var initialKnowledge = [[["id", 1], ["title", "关于float的那些事儿"], ["URL", "http://www.w3school.com.cn/cssref/pr_class_float.asp"], ["progress", 100], ["evaluation", 3], ["notes", "关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿"], ["tags", ["1", "2", "3"]]], [["id", 2], ["title", "position知多少"], ["URL", "http://www.w3school.com.cn/cssref/pr_class_position.asp"], ["progress", 75], ["evaluation", 4], ["notes", "position知多少position知多少position知多少position知多少position知多少position知多少position知多少position知多少position知多少"], ["tags", ["1", "2"]]], [["id", 3], ["title", "1211gfdhfnndhdfhdfgfd"], ["URL", "http://www.w3school.com.cn/cssref/pr_class_position.asp"], ["progress", 66], ["evaluation", 2], ["notes", "gfgitiongdfgfdh42356576654435u6uyuydhfjyrdjfjyrdhhvjtdyrdhhmvjdhhmvhthhgchvjyhmhvjyhdgmhvhyedtjfhjyyedtjykkfuuysjx"], ["tags", ["2", "3"]]]];

  for (var _i = 0; _i < initialKnowledge.length; _i++) {
    var knowledge = initialKnowledge[_i];
    knowledgeData.push(new Map(knowledge));
  }

  return knowledgeData;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateListItem = generateListItem;

var _Star = _interopRequireDefault(__webpack_require__(6));

var _Trash = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateListItem(knowledge) {
  return "<li class=\"item\">\n                <h3><a href=\"\" class=\"tit-url\">".concat(knowledge.get("title"), "</a></h3>\n                <dl>\n                    <dt>\u5B66\u4E60\u8FDB\u5EA6</dt>\n                    <dd>\n                        <span class=\"progress-bar\"></span>\n                        <span>").concat(knowledge.get("progress"), " %</span>\n                    </dd>\n                    \n                    <dt>\u77E5\u8BC6\u8BC4\u4EF7</dt>\n                    <dd>").concat(generateStars(knowledge), "</dd>\n                    \n                    <dt>\u5B66\u4E60\u7B14\u8BB0</dt>\n                    <dd>\n                        <p class=\"notes-con\">").concat(knowledge.get("notes"), "</p>\n                        <a href=\"#\" class=\"view-more\">view more</a>\n                    </dd>\n                    \n                    <dt>\u6807\u7B7E</dt>\n                    <dd>").concat(generateTags(knowledge), "</dd>\n                </dl>\n                <img src=").concat(_Trash.default, " alt=\"trash\" class=\"trash\">\n            </li>");
}

function generateStars(knowledge) {
  var stars = '';

  for (var i = 0; i < knowledge.get("evaluation"); i++) {
    stars += "<img src=".concat(_Star.default, " alt=\"star\" class=\"eva-img\">");
  }

  return stars;
}

function generateTags(knowledge) {
  var tags = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = knowledge.get("tags")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _tag = _step.value;

      if (!(_tag.replace(/(^s*)|(s*$)/g, "").length == 0 || isNull(_tag))) {
        tags += "<span class=\"tag\">".concat(_tag, "</span>");
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return tags;
}

function isNull(str) {
  if (str === "") return true; //完全空

  var regular = "^[ ]+$"; //^ 起始符，$ 结束符，+ 多个, [ ] 空格

  var re = new RegExp(regular);
  return re.test(str);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "dist/../images/19f5c5d38301fa9bcb831ab3d027d0d4.png";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "dist/../images/34525caf78a447663e194e3e720f89f7.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderHeader = renderHeader;

var _header = __webpack_require__(9);

function renderHeader() {
  var header = document.createElement('header');
  header.innerHTML = (0, _header.generateHeader)();
  document.body.appendChild(header);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHeader = generateHeader;

var _Menu = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateHeader() {
  return "<img src=".concat(_Menu.default, " alt=\"Menu\">\n            <input type=\"text\" placeholder=\"Knowledge keywords/Tags\" id=\"search-box\">");
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "dist/../images/ffaf32f7b7be03e73ab4c02380d1e0a2.png";

/***/ })
/******/ ]);