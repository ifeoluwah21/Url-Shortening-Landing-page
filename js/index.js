import { menuBtn, nav, toggleMenu } from "./nav.js";
import { form, linkValidation, link } from "./form.js";

menuBtn.addEventListener("click", function (e) {
    toggleMenu(nav, menuBtn)
})


form.addEventListener("submit", function (e) {
    e.preventDefault();
    linkValidation(link)
})