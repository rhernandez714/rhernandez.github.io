// JavaScript source code
let topButton = document.getElementById("tButton");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
        topButton.style.opacity = 0.85;

    }
        else {
        topButton.style.opacity = 0.0;
    }
}
function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let buttons = document.getElementsByClassName("socials");
let windows = document.getElementById("pokeproject");
windows.addEventListener("mouseover", () => {
    buttons[0].style.opacity = 1.0;
    buttons[1].style.opacity = 1.0;
});

windows.addEventListener("mouseout", () => {
    buttons[0].style.opacity = 0.0;
    buttons[1].style.opacity = 0.0;
});