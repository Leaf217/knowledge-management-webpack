import {knowledgeData} from './konwledgeData';

let getData = new class {
    constructor(data) {
        this.dataList = data;
    }

    //获取整个知识列表，一个数组包含多个Map，每个Map是一个konwledge
    getDataList() {
        return this.dataList;
    }

    //通过id获取某个knowledge
    getKnowledgeById(id) {
        // for (let i = 0; i < this.dataList.length;i++) {
        //     if (this.dataList[i].get("id") === id) {
        //         return this.dataList[i];
        //     }
        // }
        for (let value of this.dataList) {
            if (value.get("id") === id) {
                return value;
            }
        }
    }

    //通过input，搜索能够匹配title或者tags的knowledge
    searchKnowledge(input) {
        let matching = [];
        for (let value of this.dataList) {
            let comparison = value.get("title") + ' ' + value.get("tags").join(' ');
            comparison = comparison.toLowerCase();
            if (~comparison.indexOf(input.toLowerCase())) {
                matching.push(value);
            }
        }
        return matching;
    }



    // getDataList() {
    //     return new Promise((resolve, reject) => {
    //             resolve(this.dataList);
    //         });
    // }


    // getKnowledgeById(id) {
    //     return this.getDataList()
    //         .then(
    //             data => {
    //                 let knowledge;
    //                 data.forEach(value => {
    //                 if (value.get("id") === id) {
    //                     knowledge = value;
    //                 }
    //                 return knowledge;
    //             });
    //         });
    // }

    
}(knowledgeData());

export {getData};