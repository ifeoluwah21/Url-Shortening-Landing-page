import { menuBtn, nav, toggleMenu } from "./nav.js";
import { form, linkValidation, link } from "./form.js";
import { getShortenLink } from "./shorten.js";

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

// const getShortenLink = async (url) => {
//     try {
//         const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`);
//         const data = await response.json();
//         console.log(data.result.full_short_link)
//         addLinkToDOM(url, data.result.full_short_link)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getShortenLink("https://portal.photomath.net/solve");
// parent.addEventListener("click", function (e) {
//     if (e.target.matches(".link__output-btn")) {
//         console.log(e, e.target)
//     }
// })