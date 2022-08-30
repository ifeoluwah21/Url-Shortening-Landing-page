export const form = document.querySelector(".form");
export const link = form.querySelector(".form__input");
const errorMsg = form.querySelector(".form__input-error-msg");

export function linkValidation(input) {
    //IF THE STRING CONTAINS A URL RETURN TRUE, ELSE RETURN VALUE;

    if (input.value === "") {
        errorMsg.classList.add("error");
        link.classList.add("border--red");
        input.value = "";
        throw Error("Kindly provide a URL");
    } else {
        let result = input.value;
        console.log(input.value)
        errorMsg.classList.remove("error");
        link.classList.remove("border--red");
        input.value = "";
        return result;
    }
}
