// const imgBoxImg = document.getElementById('imgBoxImg');
function a(str) {
    console.log(str)
}

function clickImg(ele) {
    ele.style.opacity = 1;
    // imgBoxImg.children[0].setAttribute('src', ele.children[0].src);
    ele.parentNode.previousElementSibling.children[0].setAttribute('src', ele.children[0].src);
    for (let i = 0; i < ele.parentNode.childElementCount; i++) {
        if (ele.parentNode.children[i] == ele) continue;
        ele.parentNode.children[i].style.opacity = '0.5';
    }
}