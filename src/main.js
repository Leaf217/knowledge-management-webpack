import {getDataList, render} from "./list/singleton";


let list = {};

getDataList(list)
    .then(function (contents) {
        render(list.dataList);
    }, function (err) {
        console.error(err);
    });

