import {knowledgeData} from "./konwledgeData.js";

let operateData = new class {
    constructor() {
        // console.log(localStorage.getItem("knowledgeData"));
        // JSON.parse(localStorage.getItem("knowledgeData"));
        this.dataList = JSON.parse(localStorage.getItem("knowledgeData"));
    }

    //获取整个知识列表，一个数组包含多个Map，每个Map是一个knowledge
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
            // comparison = comparison.toLowerCase();
            if (~comparison.indexOf(input)) {
                matching.push(value);
            }
        }
        return matching;
    }

    //添加knowledge，格式为对象{key: value}
    addData(data) {
        let initialData = this.dataList;
        initialData.push(data);
        localStorage.setItem("knowledgeData", JSON.stringify(initialData));
        console.log(JSON.parse(localStorage.getItem("knowledgeData")));
    }



    
}(knowledgeData());

export {operateData};