const harmburger = document.querySelector(".harmburger");
const toggle_close = document.querySelector(".close");
const nav = document.querySelector(".nav");

harmburger.addEventListener("click", navigation);

function navigation() {
    harmburger.classList.toggle("active");
    nav.classList.add("active");

}

toggle_close.addEventListener("click", toggle);

function toggle() {
    toggle_close.classList.remove("active");
    nav.classList.remove("active");

}
