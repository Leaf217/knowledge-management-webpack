import {getDataList} from "./list/singleton.js";
import {renderList} from "./view/renderList.js";
import {renderHeader} from "./view/renderHeader.js";
import {renderFooter} from "./view/renderFooter.js";


let list = {};

getDataList(list)
    .then(function (contents) {
        renderHeader(); //渲染header
    }, function (err) {
        console.error(err);
    })
    .then(function (contents) {
        renderList(list.dataList); //渲染列表
    }, function (err) {
        console.error(err);
    })
    .then(function (contents) {
        renderFooter(); //渲染添加按钮
    }, function (err) {
        console.error(err);
});

