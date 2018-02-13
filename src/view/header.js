import menu from "../images/Menu.png";

export function generateHeader() {
    return `<img src=${menu} alt="Menu">
            <input type="text" placeholder="Knowledge keywords/Tags" id="search-box">`;

}