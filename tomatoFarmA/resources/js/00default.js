'use strict'

let hides = document.getElementsByClassName("hide");

window.addEventListener("scroll", () => {
    for (let e of hides) {
        if (e.getBoundingClientRect().top < -100 + window.innerHeight) {
            console.log(e.getBoundingClientRect().top)
            console.log(window.innerHeight)
            e.style.visibility = "visible";
            e.style.marginTop = "30px";
        }
    }
});