import {ajax} from '../../src/util/ajax';

let list = {};

//获取整个知识列表
function getKnowledgeList() {
    ajax.request({url: '/getData/dataList'})
        .then(function (contents) {
            list.knowledge = contents;
        }, function (err) {
            console.error(err);
        });
}

//通过title或者tags进行知识查询
function searchList(args) {
    ajax.request({url: '/getData/search', args: args})
        .then(function (contents) {
            list.search = contents;
        },function (err) {
            console.error(err);
        });
}


//test
getKnowledgeList();
searchList(1);

export {list};

