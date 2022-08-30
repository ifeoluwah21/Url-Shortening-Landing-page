import { addLinkToDOM } from "./link-element.js";

export const getShortenLink = async (url) => {
    let result;
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await response.json();
        result = data.result.full_short_link;
        console.log(data.result.full_short_link)
        addLinkToDOM(url, result);
    } catch (error) {
        console.log(error)
    }
}

