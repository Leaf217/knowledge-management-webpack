import {getDataList, renderList} from "./list/singleton";
import {renderHeader} from "./header/renderHeader";


let list = {};

getDataList(list)
    .then(function (contents) {
        renderHeader();
    }, function (err) {
        console.error(err);
    })
    .then(function (contents) {
        renderList(list);
    }, function (err) {
        console.error(err);
    });

