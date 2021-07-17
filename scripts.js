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
    localStorage.setItem("text-style", style);
    changeTextStyle();

}

function changeTextStyle() {
    alternateTextStyles.forEach((style) => {
        if (localStorage.getItem("text-style") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

if (localStorage.getItem("text-style") !== null) {
    changeTextStyle();
}

function appendText() {
    const span = document.createElement("span");
    let val = document.forms['myForm']['text-append'].value;
    const node = document.createTextNode(val);
    span.appendChild(node);

    const element = document.getElementById("div1");
    element.appendChild(span);
}

const alternateImageStyles = document.querySelectorAll(".alternate-image-style");

function setImageStyle(style) {
    localStorage.setItem("img-style", style);
    changeImageStyle();

}

function changeImageStyle() {
    alternateImageStyles.forEach((style) => {
        if (localStorage.getItem("img-style") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

if (localStorage.getItem("img-style") !== null) {
    changeImageStyle();
}