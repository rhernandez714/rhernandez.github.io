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

