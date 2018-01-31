import {getData} from "../data/dao";

//url与调用方法的映射关系
let mapping = new Map([
    ["/getData/dataList", getData.getDataList],
    ["/getData/id", getData.getKnowledgeById],
    ["/getData/search", getData.searchKnowledge]
]);

let ajax = new class {
  constructor(mapping) {
      this.mapping = mapping;
  }

  request(option) {
      return new Promise(((resolve) => {
          resolve(this.mapping.get(option.url).call(getData, option.args));
      }))
  }

}(mapping);


export {ajax};