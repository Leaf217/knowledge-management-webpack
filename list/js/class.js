import {getData} from "../../src/data/dao";
import {ajax} from "../../src/util/ajax";


let list = {};
let search = new class {
    constructor(dataList) {
        this.dataList = dataList;
    }

    searchList(query) {
        ajax.request({url: '/getData/search', args: query})
            .then(function (contents) {
                list.searchList = contents;
            },function (err) {
                console.error(err);
            });
    }
}(getData.getDataList());

//test
search.searchList(1);

export {list};