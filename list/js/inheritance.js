import {ajax} from "../../src/util/ajax";

class List {
    constructor(url, args, list) {
        this.url = url;
        this.args = args;
        this.list = list;
    }

    getData() {
        ajax.request({url: this.url, args: this.args})
            .then((contents) => {
                this.list.data = contents;
                // console.log(contents);
            },function (err) {
                console.error(err);
            });
    }

    // updateData() {
    // 未完待续
    // }
}

class DataList extends List {
    constructor(url, args, list) {
        super(url, args, list);
    }
}


class SearchList extends List {
    constructor(url, args, list) {
        super(url, args, list);
    }
}



//test
let obj = {};
let dataList = new DataList('/getData/dataList', null, obj);

dataList.getData();

console.log(obj);

