const button = document.getElementById("menu-button")
const ul = document.getElementById("header-list");
const span = document.getElementById("menu-text");

let expanded = false;
let toggled = false;

button.onclick = () => {
    toggled = true;
    expanded = !expanded;

    button.setAttribute("aria-expanded", expanded.toString());
    span.innerHTML = expanded ? 'Закрыть меню' : 'Открыть меню'
    if (expanded) {
        ul.classList.add("header__links_opened", "header__links-toggled")
    } else {
        ul.classList.remove("header__links_opened")
        ul.classList.add("header__links-toggled")
    }
}
