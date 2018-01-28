import {knowledgeData} from './konwledgeData';

let getData = new class {
    constructor(data) {
        this.dataList = data;
    }


    getDataList() {
        return new Promise((resolve, reject) => {
                resolve(this.dataList);
            });
    }


    getKnowledgeById(id) {
        return this.getDataList()
            .then(
                data => {
                    let knowledge;
                    data.forEach(value => {
                    if (value.get("id") === id) {
                        knowledge = value;
                    }
                    return knowledge;
                });
            });
    }

    
}(knowledgeData());

export {getData};