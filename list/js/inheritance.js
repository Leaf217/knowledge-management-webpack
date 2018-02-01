import {ajax} from "../../src/util/ajax";

class List {
    constructor(url, args, list) {
        this.url = url;
        this.args = args;
    }

    getData() {
        ajax.request({url: this.url, args: this.args})
            .then(function (contents) {
                console.log(contents);
            },function (err) {
                console.error(err);
            });
    }

    // updateData() {
    // 未完待续
    // }
}

class DataList extends List {
    constructor(url, args) {
        super(url, args);
    }
}


class SearchList extends List {
    constructor(url, args) {
        super(url, args);
    }
}



//test
let dataList = new DataList('/getData/dataList', null);

let test = dataList.getData();

console.log(test);

