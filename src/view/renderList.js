//渲染列表
import {generateListItem} from "./template/listItem";

export function renderList(dataList) {
    //dataList ---array
    let list = document.createElement('ul');
    // console.log(dataList);
    for (let knowledge of dataList) {
        console.log(knowledge);
        list.innerHTML += generateListItem(knowledge);
    }
    document.body.appendChild(list);
}