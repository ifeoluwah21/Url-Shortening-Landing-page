export const parent = document.querySelector(".links-section__wrapper");

export function addLinkToDOM(link, shortLink) {
    let article = document.createElement("article");
    article.classList.add("link");
    article.classList.add("border-s-round");
    article.innerHTML = `<div class="link__input">
    <h3 aria-label="Link Input">${link}</h3>
  </div>
  <div class="link__output">
    <a href=${shortLink} target="_blank" title="shortened link">${shortLink}</a>
    <button data-action="copy" class="btn link__output-btn btn--cyan border-s-round" type="button"><span>Copy</span></button>
  </div>`;
    parent.appendChild(article);
}

parent.addEventListener("click", function (e) {
    if (e.target.matches(".link__output-btn[data-action]")) {
        e.target.dataset.action = "copied";
        e.target.innerHTML = "Copied!";
        setTimeout(function () {
            e.target.dataset.action = "copy";
            e.target.innerHTML = "Copy";
        }, 2000)
        navigator.clipboard.writeText(e.target.parentElement.firstElementChild.innerHTML);
    }
})