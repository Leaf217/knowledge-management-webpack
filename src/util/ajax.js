import {getData} from "../data/dao";

let mapping = new Map([
    ["/getData/dataList", getData.getDataList()],
    ["/getData/id", getData.getKnowledgeById],
    ["/getData/search", getData.searchKnowledge]
]);

let ajax = new class {
  constructor(mapping) {
      this.mapping = mapping;
  }

  request(option) {
      if(option.args){
          let func = this.mapping.get(option.url);
          return func.call(getData, option.args);
      }
      else{
          return this.mapping.get(option.url);
      }
  }
}(mapping);


export {ajax};