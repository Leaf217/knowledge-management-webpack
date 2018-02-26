//写的比较全
import {ajax} from "../util/ajax.js";


//获取整个知识列表
export function getDataList(list) {
    return ajax.request({url: '/operateData/dataList'})
        .then(function (contents) {
            list.dataList = contents;
            // console.log(contents);
        }, function (err) {
            console.error(err);
        });
}

//通过title或者tags进行知识查询
export function getSearchList(query, list) {
    return ajax.request({url: '/operateData/search', args: query})
        .then(function (contents) {
            list.searchList = contents;
        },function (err) {
            console.error(err);
        });
}

//添加knowledge
export function addData(data, list) {
    return ajax.request({url: '/operateData/add', args: data})
        .then(function (contents) {
            list.dataList = contents;
            // console.log(contents);
        }, function (err) {
            console.error(err);
        });
}
