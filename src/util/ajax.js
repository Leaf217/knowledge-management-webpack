import {operateData} from "../data/dao.js";

//url与调用方法的映射关系
let mapping = new Map([
    ["/operateData/dataList", operateData.getDataList],
    ["/operateData/id", operateData.getKnowledgeById],
    ["/operateData/search", operateData.searchKnowledge],
    // ["/operateData/add", operateData.addData]
]);

let ajax = new class {
  constructor(mapping) {
      this.mapping = mapping;
  }

  request(option) {
      return new Promise(((resolve) => {
          resolve(this.mapping.get(option.url).call(operateData, option.args));
      }))
  }

}(mapping);


export {ajax};