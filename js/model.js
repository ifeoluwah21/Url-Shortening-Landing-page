//SAVE LINKS TO LOCALSTORAGE
const localStorageKey = "input-output"
export const saveToLocalStorage = (input, output) => {
    let linksInfo;

    if (JSON.parse(localStorage.getItem(localStorageKey))) {
        linksInfo = [].concat(JSON.parse(localStorage.getItem(localStorageKey)));
    } else {
        linksInfo = [];
    }

    linksInfo.push({ input, output });
    localStorage.setItem(localStorageKey, JSON.stringify(linksInfo));
}

//GET LINKS FROM LOCALSTORAGE
export const getFromLocalStorage = () => {
    let linksInfo;
    if (!JSON.parse(localStorage.getItem(localStorageKey))) {
        return linksInfo;
    }
    linksInfo = JSON.parse(localStorage.getItem(localStorageKey));
    return linksInfo;
}
