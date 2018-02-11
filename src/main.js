import {getDataList, render} from "./list/singleton";
// import {star} from "./view/listItem";

// console.log(star);
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

