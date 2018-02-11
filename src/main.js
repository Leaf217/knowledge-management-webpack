import {getDataList, render} from "./list/singleton";
// import {star} from "./view/listItem";

// console.log(star);
let list = {};

getDataList(list)
    .then(function (contents) {
        render(list.dataList);
    }, function (err) {
        console.error(err);
    });

