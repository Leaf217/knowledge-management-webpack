import {generateHeader} from "./template/header";

export function renderHeader() {
    let header = document.createElement('header');
    header.innerHTML = generateHeader();
    document.body.appendChild(header);
}