export const form = document.querySelector(".form");
export const link = form.querySelector(".form__input");
const errorMsg = form.querySelector(".form__input-error-msg");

export function linkValidation(input) {

    if (input.value === "") {
        errorMsg.classList.add("error");
        link.classList.add("border--red");
        input.value = "";
    } else {
        console.log(input.value)
        errorMsg.classList.remove("error");
        link.classList.remove("border--red");
        input.value = "";
    }
}
