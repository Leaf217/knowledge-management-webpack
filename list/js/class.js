import {ajax} from '../../src/util/ajax';

let searchList = new class {
    constructor(dataList) {
        this.dataList = ajax.request({
            url: '/getData/dataList'
        });
    }
    search(option) {
        return this.mapping.get(option.url).call(getData, option.args);
    }
}(ajax.request({
    url: '/getData/dataList'
}));