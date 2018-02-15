import {getDataList} from "./list/singleton";
import {renderList} from "./view/renderList";
import {renderHeader} from "./view/renderHeader";
import {renderFooter} from "./view/renderFooter";


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

