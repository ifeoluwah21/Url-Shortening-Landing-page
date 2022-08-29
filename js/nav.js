
const closeBtn = `<i class="fa-solid fa-xmark"></i>`;
const barsBtn = `<i class="fa-solid fa-bars"></i>`;
const menuBtn = document.querySelector(".header__hamburger-btn");
const nav = document.querySelector(".header__nav");

function toggleMenu(nav, menuBtn) {
    if (nav.ariaHidden === "true") {
        nav.ariaHidden = "false";
        nav.dataset.visible = "true";
        menuBtn.innerHTML = closeBtn;
    } else {
        nav.ariaHidden = "true";
        nav.dataset.visible = "";
        menuBtn.innerHTML = barsBtn;
    }
}

export { menuBtn, nav, toggleMenu };