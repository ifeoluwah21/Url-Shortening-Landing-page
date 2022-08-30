import { menuBtn, nav, toggleMenu } from "./nav.js";
import { form, linkValidation, link } from "./form.js";
import { getShortenLink } from "./shorten.js";
import { getFromLocalStorage } from "./model.js";
import { addLinkToDOM } from "./link-element.js";

document.addEventListener("DOMContentLoaded", (e) => {
    const linksInfo = getFromLocalStorage();
    console.log(linksInfo);
    if (!linksInfo) {
        return
    }
    linksInfo.forEach(linkInfo => addLinkToDOM(linkInfo.input, linkInfo.output))

})

menuBtn.addEventListener("click", function (e) {
    toggleMenu(nav, menuBtn)
})


form.addEventListener("submit", function (e) {
    e.preventDefault();
    try {
        let inputLink = linkValidation(link);
        getShortenLink(inputLink);
    } catch (error) {
        console.log(error)
    }
})
