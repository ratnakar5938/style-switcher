const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();

}

function changeColor() {
    alternateStyles.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

if (localStorage.getItem("color") !== null) {
    changeColor();
}

const alternateTextStyles = document.querySelectorAll(".alternate-text-style");

function setTextStyle(style) {
    localStorage.setItem("style", style);
    changeTextStyle();

}

function changeTextStyle() {
    alternateTextStyles.forEach((style) => {
        if (localStorage.getItem("style") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

function appendText() {
    const span = document.createElement("span");
    let val = document.forms['myForm']['text-append'].value;
    const node = document.createTextNode(val);
    span.appendChild(node);

    const element = document.getElementById("div1");
    element.appendChild(span);
}

