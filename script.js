// JavaScript source code
let topButton = document.getElementById("tButton");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
        // topButton.style.display = "block";
        topButton.style.opacity = 0.9;

    }
        else {
            //topButton.style.display = "none";
        topButton.style.opacity = 0.5;
    }
}
function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

