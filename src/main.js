import {getDataList} from "./list/singleton.js";
import {renderList} from "./view/renderList.js";
import {renderHeader} from "./view/renderHeader.js";
import {renderFooter} from "./view/renderFooter.js";
import {addData} from "./list/singleton.js";

let list = {};

addData(
    {
        "id": 0,
        "title": "关",
        "URL": "http://www.w3school.com.cn/cssref/pr_class_float.asp",
        "progress": 100,
        "evaluation": 3,
        "notes": "关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿",
        "tags": ['Tag1', 'Tag2', 'Tag3']
    },
    list
);



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








