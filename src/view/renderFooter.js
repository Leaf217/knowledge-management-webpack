import {generateFooter} from "./template/footer";

export function renderFooter() {
    let footer = document.createElement('footer');
    footer.innerHTML = generateFooter();
    document.body.appendChild(footer);
}