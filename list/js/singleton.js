import {ajax} from "../../src/util/ajax";

let list = {};

//获取整个知识列表
function getDataList() {
    ajax.request({url: '/getData/dataList'})
        .then(function (contents) {
            list.dataList = contents;
        }, function (err) {
            console.error(err);
        });
}

//通过title或者tags进行知识查询
function getSearchList(query) {
    ajax.request({url: '/getData/search', args: query})
        .then(function (contents) {
            list.searchList = contents;
        },function (err) {
            console.error(err);
        });
}


//test
getDataList();
getSearchList(1);

//之后进行一系列的处理export
//view层import，渲染页面

export {list};

