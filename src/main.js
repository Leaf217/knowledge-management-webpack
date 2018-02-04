import {getDataList} from "./list/singleton";

let list = {};

getDataList(list)
    .then(function (contents) {
        console.log(list.dataList);
    }, function (err) {
        console.error(err);
    });

