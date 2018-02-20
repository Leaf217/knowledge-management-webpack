//渲染列表
import {generateListItem} from "./template/listItem.js";

export function renderList(dataList) {
    //dataList ---array
    let list = document.createElement('ul');
    for (let knowledge of dataList) {
        list.innerHTML += generateListItem(knowledge);
    }
    document.body.appendChild(list);
}