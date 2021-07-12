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