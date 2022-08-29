import { menuBtn, nav, toggleMenu } from "./nav.js"

menuBtn.addEventListener("click", function (e) {
    toggleMenu(nav, menuBtn)
})