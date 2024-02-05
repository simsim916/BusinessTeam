let hides = document.getElementsByClassName("hide");
const saleSlideBtn = document.getElementById("secondContainerRightBtn").children[0];

window.addEventListener("scroll", () => {
    for (e of hides) {
        a(e.getBoundingClientRect().top - window.innerHeight)
        if (e.getBoundingClientRect().top < 100 + window.innerHeight) {
            e.style.opacity = "1";
            e.style.marginTop = "30px";
        }
    }
});

