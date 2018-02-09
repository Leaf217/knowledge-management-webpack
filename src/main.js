import {getDataList, render} from "./list/singleton";

let list = {};

getDataList(list)
    .then(function (contents) {
        // for (let a of list.dataList) {
        //     console.log(a.get("tags"));
        // }
        render(list.dataList);
        // console.log(list.dataList);
    }, function (err) {
        console.error(err);
    });

