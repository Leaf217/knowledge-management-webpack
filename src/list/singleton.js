//写的比较全
import {ajax} from "../util/ajax";
import {generateListItem} from "../view/listItem";


//获取整个知识列表
export function getDataList(list) {
    return ajax.request({url: '/getData/dataList'})
        .then(function (contents) {
            list.dataList = contents;
            // console.log(contents);
        }, function (err) {
            console.error(err);
        });
}

//通过title或者tags进行知识查询
export function getSearchList(query, list) {
    return ajax.request({url: '/getData/search', args: query})
        .then(function (contents) {
            list.searchList = contents;
        },function (err) {
            console.error(err);
        });
}

//渲染列表
export function renderList(dataList) {
    //dataList ---array
    let list = document.createElement('ul');
    for (let knowledge of dataList) {
        list.innerHTML += generateListItem(knowledge);
    }
    document.body.appendChild(list);
}

